import PropTypes from "prop-types";

const InvoiceRowItems = ({ item, handleDeleteItem }) => {
  const { id, product, price, quantity } = item;
  return (
    <>
      <tr className="hover:bg-indigo-50 transition duration-150 ease-in-out">
        <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-700">
          {product}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-700">
          ${price}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-700 ">
          {quantity}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-700">
          ${quantity * price}
        </td>
        <td className="py-3 md:py-4 px-3 text-center">
          <button
            onClick={() => handleDeleteItem(id)}
            className="p-1 rounded-full text-red-500 hover:bg-red-100 transition duration-150 focus:outline-none"
            aria-label="Eliminar ítem"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              ></path>
            </svg>
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
