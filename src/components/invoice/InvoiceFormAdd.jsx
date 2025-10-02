import InvoiceAddItemForm from "./InvoiceAddItemForm";

const InvoiceFormAdd = ({ handlePrint, handleAddItem, setIsFormOpen, isFormOpen }) => {
  
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-gray-800">Service Details</h3>
        <button
          onClick={() => handlePrint()}
          className="px-4 py-2 text-sm font-semibold text-white bg-gray-500 rounded-lg shadow-md hover:bg-gray-600 transition duration-150 flex items-center space-x-1"
        >
          <svg
            className="w-5 h-5 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16.444 18H19a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h2.556M17 11V5a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v6h10ZM7 15h10v4a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-4Z"
            />
          </svg>

          <span>Print</span>
        </button>
        <button
          onClick={() => setIsFormOpen(!isFormOpen)}
          className="px-4 py-2 text-sm font-semibold text-white bg-indigo-500 rounded-lg shadow-md hover:bg-indigo-600 transition duration-150 flex items-center space-x-1"
        >
          <svg
            className="w-5 h-5 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h14m-7 7V5"
            />
          </svg>
          <span>{isFormOpen ? "Close Form" : "Add Item"} </span>
        </button>
      </div>

      {isFormOpen && (
        <InvoiceAddItemForm
          handleAddItem={handleAddItem}
          onCancel={() => setIsFormOpen(false)}
          currency={"USD"}
        />
      )}
    </>
  );
};
export default InvoiceFormAdd;
