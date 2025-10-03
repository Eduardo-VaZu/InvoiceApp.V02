import { useCallback, useEffect, useMemo, useState } from "react";

import useInvoiceData from "./useInvoiceData";

const useInvoice = () => {
  const { invoiceData, setInvoiceData, isLoading, error, updateInvoiceData } = useInvoiceData();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [operationError, setOperationError] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    console.log("Estado de la factura actualizado:", invoiceData.items);
  }, [invoiceData.items]);

  const handleAddItem = useCallback(async (newItem) => {
    try {
      setIsProcessing(true);
      setOperationError(null);
      
      const newProductLower = newItem.product.toLowerCase();
      let updatedItems = [];
      let success = false;

      // Lógica para agregar o actualizar item
      const existingItem = invoiceData.items.find(
        (item) => item.product.toLowerCase() === newProductLower
      );

      if (existingItem) {
        updatedItems = invoiceData.items.map((item) =>
          item.product.toLowerCase() === newProductLower
            ? {
                ...item,
                quantity: Number(item.quantity) + Number(newItem.quantity),
              }
            : item
        );
      } else {
        const newId = Math.max(0, ...invoiceData.items.map((item) => item.id)) + 1;
        const postItem = { id: newId, ...newItem };
        updatedItems = [...invoiceData.items, postItem];
      }

      // Actualizar los datos con manejo de errores
      success = await updateInvoiceData({
        ...invoiceData,
        items: updatedItems
      });

      if (success) {
        setIsFormOpen(false);
      } else {
        setOperationError("No se pudo agregar el producto. Inténtalo de nuevo.");
      }
    } catch (err) {
      setOperationError("Error al agregar producto: " + err.message);
      console.error("Error al agregar producto:", err);
    } finally {
      setIsProcessing(false);
    }
  }, [invoiceData, updateInvoiceData]);

  const handleDeleteItem = useCallback(async (itemId) => {
    try {
      setIsProcessing(true);
      setOperationError(null);
      
      const updatedItems = invoiceData.items.filter((item) => item.id !== itemId);
      
      const success = await updateInvoiceData({
        ...invoiceData,
        items: updatedItems
      });
      
      if (!success) {
        setOperationError("No se pudo eliminar el producto. Inténtalo de nuevo.");
      }
    } catch (err) {
      setOperationError("Error al eliminar producto: " + err.message);
      console.error("Error al eliminar producto:", err);
    } finally {
      setIsProcessing(false);
    }
  }, [invoiceData, updateInvoiceData]);

  const handlePrint = () => {
    try {
      window.print();
    } catch (err) {
      setOperationError("Error al imprimir: " + err.message);
      console.error("Error al imprimir:", err);
    }
  };

  const formatCurrency = (amount) => {
    try {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);
    } catch (err) {
      console.error("Error al formatear moneda:", err);
      return `$${amount}`;
    }
  };

  const taxRate = 0.19;

  const { subtotal, discount, taxAmount, total } = useMemo(() => {
    try {
      const calculatedSubtotal = invoiceData.items.reduce(
        (sum, item) => sum + item.quantity * item.price,
        0
      );

      const calculatedDiscount = calculatedSubtotal > 999 ? 50.0 : 0.0;
      const calculatedTaxAmount =
        (calculatedSubtotal - calculatedDiscount) * taxRate;
      const calculatedTotal =
        calculatedSubtotal - calculatedDiscount + calculatedTaxAmount;

      return {
        subtotal: calculatedSubtotal,
        discount: calculatedDiscount,
        taxAmount: calculatedTaxAmount,
        total: calculatedTotal,
      };
    } catch (err) {
      console.error("Error al calcular totales:", err);
      return {
        subtotal: 0,
        discount: 0,
        taxAmount: 0,
        total: 0,
      };
    }
  }, [invoiceData.items, taxRate]);

  // Limpiar errores cuando cambia la factura
  useEffect(() => {
    setOperationError(null);
  }, [invoiceData]);

  return {
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
  };
};

export default useInvoice;
