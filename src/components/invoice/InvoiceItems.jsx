import InvoiceRowItems from "./InvoiceRowItems";
import PropTypes from "prop-types";

const InvoiceItems = ({ items }) => {
  return (
    <>
      <div className="mt-7">
        <div className="overflow-x-visible">
          <table className="min-w-full divide-y divide-gray-200 shadow-lg rounded-xl overflow-hidden">
            <thead className="bg-gray-50">
              <tr className="">
                <th className="px-6 py-3  text-sm font-bold text-gray-500 uppercase tracking-wider">
                  Id
                </th>
                <th className="px-6 py-3 text-sm font-bold text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3  text-sm font-bold text-gray-500 uppercase tracking-wider">
                  Unit Price
                </th>
                <th className="px-6 py-3 text-sm font-bold text-gray-500 uppercase tracking-wider">
                  Quantity
                </th>
                <th className="px-6 py-3 text-sm font-bold text-gray-500 uppercase tracking-wider">
                  Total
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {items.map((item) => (
                <InvoiceRowItems key={item.id} item={item} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default InvoiceItems;

InvoiceItems.propTypes = {
  items: PropTypes.arrayOf(InvoiceRowItems.propTypes.item).isRequired,
};
