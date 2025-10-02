import { useMemo, useState } from "react";
import getInvoice from "../service/getInvoice";
import InvoiceHeader from "./invoice/InvoiceHeader";
import InvoiceInformation from "./invoice/InvoiceInformation";
import InvoiceItems from "./invoice/InvoiceItems";
import InvoiceTotal from "./invoice/InvoiceTotal";
import InvoiceFormAdd from "./invoice/InvoiceFormAdd";

const InvoiceApp = () => {
  const [invoiceData, setInvoiceData] = useState(getInvoice());
  const [isFormOpen, setIsFormOpen] = useState(false);

  
  const countListItems = useMemo(() => {
    return invoiceData.items.length + 1;
  }, [invoiceData.items]);

  const handleAddItem = (newItem) => {
    const newProductLower = newItem.product.toLowerCase();
    
    setInvoiceData((prevData) => {
      const existingItem = prevData.items.find(
        (item) => item.product.toLowerCase() === newProductLower
      );

      if (existingItem) {
        return {
          ...prevData,
          items: prevData.items.map(item => 
            item.product.toLowerCase() === newProductLower 
              ? { ...item, quantity: Number(item.quantity) + Number(newItem.quantity) }
              : item
          )
        };
      }

      return {
        ...prevData,
        items: [...prevData.items, newItem],
      };
    });
    setIsFormOpen(false);
  };

  const handleDeleteItem = (itemId) => {
    setInvoiceData((prevData) => ({
      ...prevData,
      items: prevData.items.filter((item) => item.id !== itemId),
    }));
  };


  return (
    <>
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full space-y-8" x-data="invoiceData()">
          <div className="invoice-box bg-white p-8 rounded-xl shadow-lg">
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
                handleAddItem={handleAddItem}
                isFormOpen={isFormOpen}
                setIsFormOpen={setIsFormOpen}
                countListItems={countListItems}
              />
              <InvoiceItems
                items={invoiceData.items}
                handleDeleteItem={handleDeleteItem}
              />
            </div>
            <InvoiceTotal items={invoiceData.items} />

            <div className="mt-10 p-4 border-t border-gray-200 text-center">
              <p className="text-xs text-gray-500 italic">
                Thank you for your business. All payments are due within 30 days
                of the issuance of this invoice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvoiceApp;
