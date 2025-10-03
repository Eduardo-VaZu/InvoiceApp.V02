import { useState } from "react";

const useForm = (handleAddItem) => {
  const [formData, setFormData] = useState({
    product: "",
    quantity: 1,
    price: 0.0,
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    // Convertir a número si el tipo de input es 'number', sino dejar como string.
    setFormData({
      ...formData,
      [name]: type === "number" ? Number(value) : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { product, quantity, price } = formData;

    if (!product.trim() || Number(quantity) <= 0 || Number(price) <= 0) {
      console.error("Por favor, complete todos los campos correctamente.");
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
  };

  return {
    formData,
    handleSubmit,
    handleChange,
  };
};

export default useForm;
