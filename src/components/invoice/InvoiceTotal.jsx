import PropTypes from "prop-types";

const InvoiceTotal = ({ items }) => {
  const subTotal = items.reduce((acc, { price, quantity }) => {
    return acc + price * quantity;
  }, 0);
  const tax = subTotal * 0.19;
  return (
    <div className="mt-6 flex justify-end">
      <div className="w-full md:w-1/3">
        <div className="space-y-1">
          <div className="flex justify-between">
            <span className="text-gray-600">Subtotal</span>
            <span>{subTotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Tax (19%)</span>
            <span>{tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-semibold text-lg border-t pt-2">
            <span>Total</span>
            <span>{(subTotal + tax).toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InvoiceTotal;

InvoiceTotal.propTypes = {
  items: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  tax: PropTypes.number.isRequired,
  subTotal: PropTypes.number.isRequired,
};
