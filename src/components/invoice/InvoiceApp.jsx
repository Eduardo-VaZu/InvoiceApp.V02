import { useState, useEffect } from "react";
import InvoiceHeader from "./InvoiceHeader";
import InvoiceInformation from "./InvoiceInformation";
import InvoiceItems from "./InvoiceItems";
import InvoiceTotal from "./InvoiceTotal";
import InvoiceFormAdd from "./InvoiceFormAdd";
import LoadingSpinner from "../ui/LoadingSpinner";
import ErrorMessage from "../ui/ErrorMessage";
import useInvoice from "../../hooks/useInvoice";

const InvoiceApp = () => {
  const {
    formatCurrency,
    handlePrint,
    handleDeleteItem,
    handleAddItem,
    invoiceData,
    isFormOpen,
    setIsFormOpen,
    subtotal,
    taxRate,
    discount,
    taxAmount,
    total,
    isLoading,
    isProcessing,
    error,
    operationError,
  } = useInvoice();

  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (error || operationError) {
      setShowError(true);
    }
  }, [error, operationError]);

  const handleCloseError = () => {
    setShowError(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <LoadingSpinner
          size="large"
          message="Cargando datos de la factura..."
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-6 px-2 sm:py-12 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-6 sm:space-y-8">

        {showError && (error || operationError) && (
          <ErrorMessage
            message={error || operationError}
            onClose={handleCloseError}
          />
        )}

        <div className="invoice-box bg-white p-4 sm:p-8 rounded-xl shadow-lg relative overflow-x-auto">

          {isProcessing && (
            <div className="absolute inset-0 bg-white bg-opacity-70 flex justify-center items-center z-10 rounded-xl">
              <LoadingSpinner message="Procesando..." />
            </div>
          )}

          <InvoiceHeader
            invoiceId={invoiceData.id}
            company={invoiceData.company}
          />
          <InvoiceInformation
            client={invoiceData.client}
            payment={invoiceData.payment}
            date={invoiceData.date}
          />
          <div className="mt-4 pt-4 border-t">
            <InvoiceFormAdd
              handlePrint={handlePrint}
              handleAddItem={handleAddItem}
              isFormOpen={isFormOpen}
              setIsFormOpen={setIsFormOpen}
              isProcessing={isProcessing}
            />
            <InvoiceItems
              items={invoiceData.items}
              handleDeleteItem={handleDeleteItem}
              formatCurrency={formatCurrency}
            />
          </div>
          <InvoiceTotal
            taxRate={taxRate}
            subtotal={subtotal}
            discount={discount}
            taxAmount={taxAmount}
            total={total}
          />
          <div className="mt-10 p-4 border-t border-gray-200 text-center">
            <p className="text-xs text-gray-500 italic">
              Thank you for your business. All payments are due within 30 days
              of the issuance of this invoice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceApp;
