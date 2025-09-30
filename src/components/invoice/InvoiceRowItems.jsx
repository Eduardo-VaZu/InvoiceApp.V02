import PropTypes from "prop-types";
import InvoiceIconTrashRow from "./InvoiceIconTrashRow";

const InvoiceRowItems = ({ item, handleDeleteItem }) => {
  const { id, product, price, quantity } = item;
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  const total = price * quantity;
  return (
    <>
      <tr className="block p-4 my-4 bg-white border rounded-lg shadow-sm md:table-row md:border-none md:p-0 md:mb-0 md:shadow-none hover:bg-gray-50 transition-colors duration-200">
        
        <td className="flex justify-between items-center py-1 font-medium text-gray-900 md:table-cell md:px-6 md:py-4 md:font-normal md:text-center">
          <span className="text-sm font-bold text-gray-600 uppercase md:hidden mr-2">
            Product:
          </span>
          {product}
        </td>

        <td className="flex justify-between items-center py-1 text-gray-700 md:table-cell md:px-6 md:py-4 md:text-center">
          <span className="text-sm font-bold text-gray-600 uppercase md:hidden">
            Price
          </span>
          {formatCurrency(price)}
        </td>

        <td className="flex justify-between items-center py-1 text-gray-700 md:table-cell md:px-6 md:py-4 md:text-center">
          <span className="text-sm font-bold text-gray-600 uppercase md:hidden">
            Quantity
          </span>
          {quantity}
        </td>

        <td className="flex justify-between items-center py-1 font-bold text-indigo-600 md:table-cell md:px-6 md:py-4 md:text-center">
          <span className="text-sm font-bold text-gray-600 uppercase md:hidden">
            Total
          </span>
          {formatCurrency(total)}
        </td>

        <td className="flex justify-between items-center py-1 font-bold text-indigo-600 md:table-cell md:px-6 md:py-4 md:text-center">
          <span className="text-sm font-bold text-gray-600 uppercase md:hidden">
            Accion
          </span>
          <button
            onClick={() => handleDeleteItem(id)}
            className="p-2 text-red-600 hover:bg-red-100 rounded-full transition-colors duration-200"
            aria-label={`Delete item ${product}`}
          >
            <InvoiceIconTrashRow className="h-5 w-5" />
          </button>
        </td>
      </tr>
    </>
  );
};
export default InvoiceRowItems;

InvoiceRowItems.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    product: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};