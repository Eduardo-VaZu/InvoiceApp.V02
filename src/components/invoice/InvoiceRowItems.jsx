import PropTypes from "prop-types";

const InvoiceRowItems = ({ item }) => {
  const { id, product, price, quantity } = item;
  return (
    <>
      <tr className="hover:bg-indigo-50 transition duration-150 ease-in-out">
        <td className="px-6 py-4 whitespace-nowrap text-sm text-center font-medium text-gray-900">
          {id}
        </td>
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
