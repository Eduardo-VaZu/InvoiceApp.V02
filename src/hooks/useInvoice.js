import { useCallback, useEffect, useState } from "react";
import getInvoice from "../service/getInvoice";

const useInvoice = () => {
  const [invoiceData, setInvoiceData] = useState(getInvoice());
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    console.log("Estado de la factura actualizado:", invoiceData.items);
  }, [invoiceData]);

  const handleAddItem = useCallback((newItem) => {
    const newProductLower = newItem.product.toLowerCase();

    setInvoiceData((prevData) => {
      const existingItem = prevData.items.find(
        (item) => item.product.toLowerCase() === newProductLower
      );

      if (existingItem) {
        return {
          ...prevData,
          items: prevData.items.map((item) =>
            item.product.toLowerCase() === newProductLower
              ? {
                  ...item,
                  quantity: Number(item.quantity) + Number(newItem.quantity),
                }
              : item
          ),
        };
      }

      const newId = Math.max(0, ...prevData.items.map((item) => item.id)) + 1;
      const postItem = { id: newId, ...newItem };

      return {
        ...prevData,
        items: [...prevData.items, postItem],
      };
    });

    setIsFormOpen(false);
  }, []);

  const handleDeleteItem = useCallback((itemId) => {
    setInvoiceData((prevData) => ({
      ...prevData,
      items: prevData.items.filter((item) => item.id !== itemId),
    }));
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  return {
    formatCurrency,
    handlePrint,
    handleDeleteItem,
    handleAddItem,
    invoiceData,
    isFormOpen,
    setIsFormOpen,
  };
};

export default useInvoice;
