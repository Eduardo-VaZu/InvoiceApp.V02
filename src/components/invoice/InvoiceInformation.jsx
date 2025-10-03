import React from "react";
import PropTypes from "prop-types";

const InvoiceInformation = ({ client, payment, date }) => {
  const {
    name,
    address: { country, city, street, number },
  } = client;
  const { status, transactionDate } = payment;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div>
        <h3 className="text-lg font-semibold text-gray-900">Billed To</h3>
        <p className="text-sm sm:text-base text-gray-600">{name}</p>
        <p className="text-sm sm:text-base text-gray-600 break-words">{`${number} ${street}, ${city}, ${country}`}</p>
        <p className="text-sm sm:text-base text-gray-600">
          City: <span>{city}</span>
        </p>
        <p className="text-sm sm:text-base text-gray-600">
          Postal Code: <span>{number}</span>
        </p>
      </div>
      <div className="text-left md:text-right mt-4 md:mt-0">
        <p className="text-sm sm:text-base text-gray-600">
          Invoice Date: <span>{date}</span>
        </p>
        <p className="text-sm sm:text-base text-gray-600">
          Transaction Date: <span>{transactionDate}</span>
        </p>
        <p className="text-sm sm:text-base text-gray-600">
          Payment Status: <span className="font-medium">{status}</span>
        </p>
      </div>
    </div>
  );
};

InvoiceInformation.propTypes = {
  client: PropTypes.shape({
    name: PropTypes.string.isRequired,
    address: PropTypes.shape({
      country: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      street: PropTypes.string.isRequired,
      number: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    }).isRequired,
  }).isRequired,
  payment: PropTypes.shape({
    status: PropTypes.string.isRequired,
    transactionDate: PropTypes.string.isRequired,
  }).isRequired,
  date: PropTypes.string.isRequired,
};

export default InvoiceInformation;
