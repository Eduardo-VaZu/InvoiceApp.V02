import React from 'react';
import PropTypes from 'prop-types';

const InvoiceTotal = ({ subtotal, taxRate, discount, taxAmount, total }) => {
  return (
    <div className="flex justify-end mt-6 sm:mt-10">
      <div className="w-full sm:w-80 space-y-2 p-4 sm:p-5 bg-indigo-50 rounded-lg shadow-inner border-2 border-indigo-200">
        <div className="flex justify-between text-xs sm:text-sm text-gray-700">
          <span>Subtotal:</span>
          <span>USD {subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-xs sm:text-sm font-medium text-red-600 border-b border-dashed border-red-200 pb-2">
          <span>Discount Applied:</span>
          {discount === 50.0 ? (
            <span>- USD {discount.toFixed(2)}</span>
          ) : (
            <span> USD {discount.toFixed(2)}</span>
          )}
        </div>

        <div className="flex justify-between text-xs sm:text-sm text-gray-700 pt-2">
          <span>Tax ({taxRate * 100}%):</span>
          <span>USD {taxAmount.toFixed(2)}</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between pt-3 border-t border-indigo-200">
          <span className="text-base sm:text-lg font-bold text-indigo-800">
            TOTAL TO PAY:
          </span>
          <span className="text-lg sm:text-xl font-extrabold text-indigo-900">
            USD {total.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

InvoiceTotal.propTypes = {
  subtotal: PropTypes.number.isRequired,
  taxRate: PropTypes.number.isRequired,
  discount: PropTypes.number.isRequired,
  taxAmount: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};

export default InvoiceTotal;
