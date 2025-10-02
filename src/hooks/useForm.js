import { useState } from "react";

const useForm = (handleAddItem) => {
  const [product, setproduct] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

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
    setproduct("");
    setQuantity(1);
    setPrice(0.0);
  };

  return {
    product,
    quantity,
    price,
    setproduct,
    setQuantity,
    setPrice,
    handleSubmit,
  };
};

export default useForm;
