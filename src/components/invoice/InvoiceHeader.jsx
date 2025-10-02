const InvoiceHeader = ({ invoiceId, company }) => {
  const { name, fiscalNumber, address } = company;
  const { country, city, street, number } = address;
  return (
    <>
      <div className="flex justify-between items-center border-b pb-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Invoice</h1>
          <p className="text-gray-600">
            Order Reference: <span>{invoiceId}</span>
          </p>
        </div>
        <div className="text-right">
          <h2 className="text-xl font-semibold text-gray-900">{name}</h2>
          <p className="text-gray-600">{fiscalNumber}</p>
          <p className="text-gray-600">
            {number} {street}, {city}, {country}
          </p>
        </div>
      </div>
    </>
  );
};

export default InvoiceHeader;

