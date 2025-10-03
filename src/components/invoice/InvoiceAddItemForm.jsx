import React from "react";
import PropTypes from "prop-types";
import useForm from "../../hooks/useForm";

const InvoiceAddItemForm = ({
  handleAddItem,
  onCancel,
  isProcessing = false,
}) => {
  const { formData, errors, touched, handleSubmit, handleChange, handleBlur } =
    useForm(handleAddItem);
  const { product, quantity, price } = formData;

  const baseInputClasses = `
    w-full px-4 py-2.5 border-2 rounded-xl text-base
    transition duration-200 ease-in-out
    focus:outline-none focus:ring-4 focus:ring-indigo-100
    text-gray-800 placeholder-gray-400
  `;

  const errorInputClasses = "border-red-500 bg-red-50";
  const defaultInputClasses = "border-gray-300 focus:border-indigo-500";

  const processingClasses = "opacity-70 cursor-not-allowed bg-gray-100";

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 sm:p-8 bg-white border border-gray-100 rounded-xl shadow-2xl shadow-indigo-100 mb-6"
    >

      <h4 className="text-xl sm:text-2xl font-extrabold text-indigo-800 mb-6 flex items-center">
        <svg
          className="w-6 h-6 mr-3 text-indigo-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        Add New Item
      </h4>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-4 md:gap-6">

        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Product / Service
          </label>
          <input
            name="product"
            type="text"
            value={product}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Name of product or service"
            disabled={isProcessing}
            className={`${baseInputClasses} ${
              touched.product && errors.product
                ? errorInputClasses
                : defaultInputClasses
            } ${isProcessing ? processingClasses : ""}`}
          />
          {touched.product && errors.product && (
            <p className="mt-2 text-xs font-medium text-red-600 flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              {errors.product}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Quantity
          </label>
          <input
            name="quantity"
            type="number"
            value={quantity}
            onChange={handleChange}
            onBlur={handleBlur}
            min="1"
            disabled={isProcessing}
            className={`${baseInputClasses} ${
              touched.quantity && errors.quantity
                ? errorInputClasses
                : defaultInputClasses
            } ${isProcessing ? processingClasses : ""}`}
          />
          {touched.quantity && errors.quantity && (
            <p className="mt-2 text-xs font-medium text-red-600 flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              {errors.quantity}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Unit Price (USD)
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-bold text-base">
              $
            </span>
            <input
              name="price"
              type="number"
              value={price}
              onChange={handleChange}
              onBlur={handleBlur}
              min="0.01"
              step="0.01"
              disabled={isProcessing}
              className={`${baseInputClasses} pl-10 ${
                touched.price && errors.price
                  ? errorInputClasses
                  : defaultInputClasses
              } ${isProcessing ? processingClasses : ""}`}
            />
          </div>
          {touched.price && errors.price && (
            <p className="mt-2 text-xs font-medium text-red-600 flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              {errors.price}
            </p>
          )}
        </div>
      </div>

      <div className="flex justify-end space-x-3 mt-8 pt-4 border-t border-gray-100">
        <button
          type="button"
          onClick={onCancel}
          disabled={isProcessing}
          className={`
            px-6 py-2.5 text-sm font-semibold text-gray-600 bg-white border border-gray-300 rounded-xl
            transition duration-200 ease-in-out shadow-sm
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
            ${isProcessing ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-50 hover:border-gray-400"}
          `}
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isProcessing}
          className={`
            px-6 py-2.5 text-sm font-semibold text-white bg-indigo-600 rounded-xl shadow-lg
            transition duration-200 ease-in-out
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
            ${
              isProcessing
                ? "opacity-60 cursor-not-allowed"
                : "hover:bg-indigo-700 active:bg-indigo-800"
            }
          `}
        >
          {isProcessing ? "Saving..." : "Save Product"}
        </button>
      </div>
    </form>
  );
};

InvoiceAddItemForm.propTypes = {
  handleAddItem: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  isProcessing: PropTypes.bool,
};

export default InvoiceAddItemForm;
