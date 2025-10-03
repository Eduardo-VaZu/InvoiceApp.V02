import React from "react";
import PropTypes from "prop-types";

const InvoiceHeader = ({ invoiceId, company }) => {
  const { name, fiscalNumber, address } = company;
  const { country, city, street, number } = address;
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-4 gap-4 sm:gap-0">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Invoice</h1>
        <p className="text-sm sm:text-base text-gray-600">
          Order Reference: <span>{invoiceId}</span>
        </p>
      </div>
      <div className="text-left sm:text-right w-full sm:w-auto">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900">{name}</h2>
        <p className="text-sm sm:text-base text-gray-600">{fiscalNumber}</p>
        <p className="text-sm sm:text-base text-gray-600 break-words">
          {number} {street}, {city}, {country}
        </p>
      </div>
    </div>
  );
};

InvoiceHeader.propTypes = {
  invoiceId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  company: PropTypes.shape({
    name: PropTypes.string.isRequired,
    fiscalNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
    address: PropTypes.shape({
      country: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      street: PropTypes.string.isRequired,
      number: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    }).isRequired,
  }).isRequired,
};

export default InvoiceHeader;
