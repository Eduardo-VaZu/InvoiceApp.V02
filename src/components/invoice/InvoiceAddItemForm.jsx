import useForm from "../../hooks/useForm";

const InvoiceAddItemForm = ({ handleAddItem, onCancel }) => {
  const { formData, handleSubmit, handleChange } = useForm(handleAddItem);
  const { product, quantity, price } = formData;

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="p-4 bg-white border border-indigo-200 rounded-lg shadow-lg mb-6"
      >
        <h4 className="text-md font-bold text-indigo-700 mb-4">Add New Item</h4>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <label className="block text-xs font-medium text-gray-600 mb-1">
              Product
            </label>
            <input
              name="product"
              type="text"
              value={product}
              onChange={handleChange}
              placeholder="Name product"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">
              Quantity
            </label>
            <input
              name="quantity"
              type="number"
              value={quantity}
              onChange={handleChange}
              min="1"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">
              Unit Price (USD)
            </label>
            <input
              name="price"
              type="number"
              value={price}
              onChange={handleChange}
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
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 transition duration-150"
          >
            Save Product
          </button>
        </div>
      </form>
    </>
  );
};

export default InvoiceAddItemForm;
