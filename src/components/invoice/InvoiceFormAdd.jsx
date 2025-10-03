import PropTypes from "prop-types";
import React from "react";

const InvoiceFormAdd = ({
  handlePrint,
  handleAddItem,
  setIsFormOpen,
  isFormOpen,
  isProcessing = false,
}) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 mb-6 border-b border-gray-200 pb-4">
      {/* Título de la Sección */}
      <h3 className="text-xl font-extrabold text-gray-800 tracking-tight">
        Service Details
      </h3>

      {/* Contenedor de Botones de Acción */}
      <div className="flex flex-wrap gap-2 w-full sm:w-auto">
        {/* Botón de Imprimir */}
        <button
          type="button"
          onClick={handlePrint}
          disabled={isProcessing}
          className={`
            px-3 sm:px-4 py-1.5 sm:py-2 text-sm font-semibold
            text-gray-700 bg-gray-200 rounded-lg shadow-sm
            transition duration-150 ease-in-out
            flex items-center space-x-2
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500
            ${isProcessing ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-300 active:bg-gray-400"}
          `}
        >
          <svg
            className="w-5 h-5"
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

        {/* Botón de Añadir/Cerrar Formulario */}
        <button
          type="button"
          onClick={() => setIsFormOpen((prev) => !prev)}
          disabled={isProcessing}
          className={`
            px-3 sm:px-4 py-1.5 sm:py-2 text-sm font-semibold
            text-white bg-indigo-600 rounded-lg shadow-md
            transition duration-150 ease-in-out
            flex items-center space-x-2
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
            ${isProcessing ? "opacity-50 cursor-not-allowed" : "hover:bg-indigo-700 active:bg-indigo-800"}
          `}
        >
          <svg
            className="w-5 h-5"
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
              d={isFormOpen ? "m15 9-6 6m0-6 6 6" : "M5 12h14m-7 7V5"}
            />
          </svg>
          <span>{isFormOpen ? "Close Form" : "Add Item"}</span>
        </button>
      </div>

      {/* Formulario condicional */}
      {isFormOpen && (
        <div className="w-full mt-4">
          <InvoiceAddItemForm
            handleAddItem={handleAddItem}
            onCancel={() => setIsFormOpen(false)}
            isProcessing={isProcessing}
          />
        </div>
      )}
    </div>
  );
};

InvoiceFormAdd.propTypes = {
  handlePrint: PropTypes.func.isRequired,
  handleAddItem: PropTypes.func.isRequired,
  setIsFormOpen: PropTypes.func.isRequired,
  isFormOpen: PropTypes.bool.isRequired,
  isProcessing: PropTypes.bool,
};

export default InvoiceFormAdd;
