import InvoiceRowItems from "./InvoiceRowItems";
import PropTypes from "prop-types";

const InvoiceItems = ({ items, handleDeleteItem, ...rest }) => {
  const headers = ["Product", "Unit Price", "Quantity", "Total", "Action"];

  return (
    <div className="mt-7" {...rest}>
      <div className="overflow-x-auto rounded-2xl mt-1">
        <table className="min-w-full">
          <thead className="bg-indigo-200 hidden md:table-header-group">
            <tr>
              {headers.map((header) => (
                <th
                  key={header}
                  className={`px-6 py-3 text-sm font-bold text-gray-900 uppercase tracking-wider text-center`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="bg-white">
            {items.length > 0 ? (
              items.map((item) => (
                <InvoiceRowItems
                  key={item.id}
                  item={item}
                  handleDeleteItem={handleDeleteItem}
                />
              ))
            ) : (
              <tr>
                <td
                  colSpan={headers.length}
                  className="text-center p-6 text-gray-500"
                >
                  No items have been added yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

InvoiceItems.propTypes = {
  items: PropTypes.array.isRequired,
  handleDeleteItem: PropTypes.func.isRequired,
};

export default InvoiceItems;
