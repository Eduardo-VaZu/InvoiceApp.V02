import React from "react";
import PropTypes from "prop-types";
import InvoiceIconTrashRow from "./InvoiceIconTrashRow";

const InvoiceRowItems = ({ item, handleDeleteItem, formatCurrency }) => {
  const { id, product, price, quantity } = item;

  const total = price * quantity;

  return (
    <tr className="block p-3 sm:p-4 my-3 sm:my-4 bg-white border rounded-lg shadow-sm md:table-row md:border-none md:p-0 md:mb-0 md:shadow-none hover:bg-gray-50 transition-colors duration-200">
      <td className="flex justify-between items-center py-1 font-medium text-gray-900 md:table-cell md:px-4 md:px-6 md:py-4 md:font-normal md:text-center">
        <span className="text-xs sm:text-sm font-bold text-gray-600 uppercase md:hidden mr-2">
          Product:
        </span>
        <span className="text-sm sm:text-base">{product}</span>
      </td>

      <td className="flex justify-between items-center py-1 text-gray-700 md:table-cell md:px-4 md:px-6 md:py-4 md:text-center">
        <span className="text-xs sm:text-sm font-bold text-gray-600 uppercase md:hidden">
          Price
        </span>
        <span className="text-sm sm:text-base">{formatCurrency(price)}</span>
      </td>

      <td className="flex justify-between items-center py-1 text-gray-700 md:table-cell md:px-4 md:px-6 md:py-4 md:text-center">
        <span className="text-xs sm:text-sm font-bold text-gray-600 uppercase md:hidden">
          Quantity
        </span>
        <span className="text-sm sm:text-base">{quantity}</span>
      </td>

      <td className="flex justify-between items-center py-1 font-bold text-indigo-600 md:table-cell md:px-4 md:px-6 md:py-4 md:text-center">
        <span className="text-xs sm:text-sm font-bold text-gray-600 uppercase md:hidden">
          Total
        </span>
        <span className="text-sm sm:text-base">{formatCurrency(total)}</span>
      </td>

      <td className="flex justify-between items-center py-1 font-bold text-indigo-600 md:table-cell md:px-4 md:px-6 md:py-4 md:text-center">
        <span className="text-xs sm:text-sm font-bold text-gray-600 uppercase md:hidden">
          Acción
        </span>
        <button
          onClick={() => handleDeleteItem(id)}
          className="p-1 sm:p-2 text-red-600 hover:bg-red-100 rounded-full transition-colors duration-200"
          aria-label={`Delete item ${product}`}
        >
          <InvoiceIconTrashRow className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </td>
    </tr>
  );
};

InvoiceRowItems.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    product: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  handleDeleteItem: PropTypes.func.isRequired,
  formatCurrency: PropTypes.func.isRequired,
};

export default InvoiceRowItems;
