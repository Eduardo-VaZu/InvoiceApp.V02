import PropTypes from "prop-types";

const InvoiceTotal = ({ items }) => {
  const discount = 50.00;
  const taxRate = 0.10;
  const subtotal = items.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );
  const taxAmount = (subtotal - discount) * taxRate;
  const total = subtotal - discount + taxAmount;
  return (
    <div className="flex justify-end mt-10">
      <div className="w-full sm:w-80 space-y-2 p-5 bg-indigo-50 rounded-lg shadow-inner border-2 border-indigo-200">

        <div className="flex justify-between text-sm text-gray-700">
          <span>Subtotal:</span>
          <span>
            USD {subtotal.toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between text-sm font-medium text-red-600 border-b border-dashed border-red-200 pb-2">
          <span>Descuento Aplicado:</span>
          <span>
            - USD {discount.toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between text-sm text-gray-700 pt-2">
          <span>Impuesto ({taxRate * 100}%):</span>
          <span>
            USD {taxAmount.toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between pt-3 border-t border-indigo-200">
          <span className="text-lg font-bold text-indigo-800">
            TOTAL A PAGAR:
          </span>
          <span className="text-xl font-extrabold text-indigo-900">
            USD {total.toFixed(2)}
          </span>
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
