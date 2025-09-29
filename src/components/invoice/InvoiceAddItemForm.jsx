import { useState } from "react";

const InvoiceAddItemForm = ({ handleAddItem, onCancel }) => {
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
      id: Date.now(),
      product: product.trim(),
      quantity: Number(quantity),
      price: Number(price),
    };
    handleAddItem(newItem);
    setproduct("");
    setQuantity(1);
    setPrice(0);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="p-4 bg-white border border-indigo-200 rounded-lg shadow-lg mb-6"
      >
        <h4 className="text-md font-bold text-indigo-700 mb-4">
          Agregar Nuevo Ítem
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

          <div className="md:col-span-2">
            <label className="block text-xs font-medium text-gray-600 mb-1">
              Producto
            </label>
            <input
              type="text"
              value={product}
              onChange={(e) => setproduct(e.target.value)}
              placeholder="Nombre del producto"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">
              Cantidad
            </label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              min="1"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">
              Precio Unitario (USD)
            </label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              min="0.01"
              step="0.01"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
            />
          </div>
        </div>

        <div className="flex justify-end space-x-3 mt-4">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition duration-150"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 transition duration-150"
          >
            Guardar Producto
          </button>
        </div>
      </form>
    </>
  );
};

export default InvoiceAddItemForm;
