import InvoiceAddItemForm from "./InvoiceAddItemForm";

const InvoiceFormAdd = ({handleAddItem, setIsFormOpen, isFormOpen}) => {
  
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-gray-800">
          Service Details
        </h3>
        <button
          onClick={() => setIsFormOpen(!isFormOpen)}
          className="px-4 py-2 text-sm font-semibold text-white bg-indigo-500 rounded-lg shadow-md hover:bg-indigo-600 transition duration-150 flex items-center space-x-1"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            ></path>
          </svg>
          <span>{isFormOpen ? "Close Form" : "Add Item"} </span>
        </button>
      </div>

      {isFormOpen && (
        <InvoiceAddItemForm
          handleAddItem={handleAddItem}
          onCancel={() => setIsFormOpen(false)}
          currency={'USD'}
        />
      )}
    </>
  );
};
export default InvoiceFormAdd;
