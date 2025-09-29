import InvoiceRowItems from "./InvoiceRowItems";
import PropTypes from "prop-types";

const InvoiceItems = ({ items, handleDeleteItem }) => {
  return (
    <>
      <div className="mt-7">
        <div className="overflow-x-visible border-2 rounded-2xl border-indigo-200">
          <table className="min-w-full divide-y divide-indigo-200 shadow-lg rounded-xl overflow-hidden border-0">
            <thead className="bg-indigo-200">
              <tr className="">
                <th className="px-6 py-3 text-sm font-bold text-gray-900 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3  text-sm font-bold text-gray-900 uppercase tracking-wider">
                  Unit Price
                </th>
                <th className="px-6 py-3 text-sm font-bold text-gray-900 uppercase tracking-wider">
                  Quantity
                </th>
                <th className="px-6 py-3 text-sm font-bold text-gray-900 uppercase tracking-wider">
                  Total
                </th>
                <th className="px-6 py-3 text-sm font-bold text-gray-900 uppercase tracking-wider">
                  Accion
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {items.map((item) => (
                <InvoiceRowItems
                  key={item.id}
                  item={item}
                  handleDeleteItem={handleDeleteItem}
                />
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
