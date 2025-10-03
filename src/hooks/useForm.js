import { useState } from "react";

const useForm = (handleAddItem) => {
  const [formData, setFormData] = useState({
    product: "",
    quantity: 1,
    price: 0.0,
  });
  
  const [errors, setErrors] = useState({
    product: "",
    quantity: "",
    price: "",
  });

  const [touched, setTouched] = useState({
    product: false,
    quantity: false,
    price: false,
  });

  const validateField = (name, value) => {
    let error = "";
    
    switch (name) {
      case "product":
        if (!value.trim()) {
          error = "El nombre del producto es obligatorio";
        } else if (value.trim().length < 3) {
          error = "El nombre debe tener al menos 3 caracteres";
        }
        break;
      case "quantity":
        if (Number(value) <= 0) {
          error = "La cantidad debe ser mayor a 0";
        } else if (!Number.isInteger(Number(value))) {
          error = "La cantidad debe ser un número entero";
        }
        break;
      case "price":
        if (Number(value) <= 0) {
          error = "El precio debe ser mayor a 0";
        }
        break;
      default:
        break;
    }
    
    return error;
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const newValue = type === "number" ? Number(value) : value;
    
    setFormData({
      ...formData,
      [name]: newValue,
    });
    
    const error = validateField(name, newValue);
    setErrors({
      ...errors,
      [name]: error,
    });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    
    setTouched({
      ...touched,
      [name]: true,
    });
    
    const error = validateField(name, formData[name]);
    setErrors({
      ...errors,
      [name]: error,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { product, quantity, price } = formData;
    
    const productError = validateField("product", product);
    const quantityError = validateField("quantity", quantity);
    const priceError = validateField("price", price);

    setErrors({
      product: productError,
      quantity: quantityError,
      price: priceError,
    });

    setTouched({
      product: true,
      quantity: true,
      price: true,
    });

    if (productError || quantityError || priceError) {
      return;
    }

    const newItem = {
      product: product.trim(),
      price: Number(price),
      quantity: Number(quantity),
    };

    handleAddItem(newItem);

    setFormData({
      product: "",
      quantity: 1,
      price: 0.0,
    });
    
    setErrors({
      product: "",
      quantity: "",
      price: "",
    });
    
    setTouched({
      product: false,
      quantity: false,
      price: false,
    });
  };

  return {
    formData,
    errors,
    touched,
    handleSubmit,
    handleChange,
    handleBlur,
  };
};

export default useForm;
