import { useCallback, useEffect, useState } from "react";
import { getInvoice } from "../service/getInvoice";
import { saveInvoice, updateInvoice } from "../service/localStorageService";

export const useInvoiceData = () => {
  const [invoiceData, setInvoiceData] = useState({
    id: 0,
    name: "",
    date: "",
    payment: {
      transactionDate: "",
      status: "",
    },
    client: {
      id: 0,
      name: "",
      lastName: "",
      address: {
        country: "",
        city: "",
        street: "",
        number: 0,
      },
    },
    company: {
      name: "",
      fiscalNumber: 0,
      address: {
        country: "",
        city: "",
        street: "",
        number: 0,
      },
    },
    items: [],
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadInvoice = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      const data = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(getInvoice());
        }, 500);
      });

      setInvoiceData(data);
    } catch (err) {
      setError("Error al cargar los datos de la factura: " + err.message);
      console.error("Error al cargar los datos:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const updateInvoiceData = useCallback(
    async (newData) => {
      try {
        setIsLoading(true);
        setError(null);

        const updatedData = {
          ...invoiceData,
          ...newData,
        };

        setInvoiceData(updatedData);

        const success = updateInvoice(updatedData);

        if (!success) {
          throw new Error("No se pudo guardar en localStorage");
        }

        return true;
      } catch (err) {
        setError("Error al actualizar los datos: " + err.message);
        console.error("Error al actualizar datos:", err);
        return false;
      } finally {
        setIsLoading(false);
      }
    },
    [invoiceData]
  );

    useEffect(() => {
    loadInvoice();
  }, [loadInvoice]);

  const setInvoiceDataWithPersistence = useCallback((data) => {
    if (typeof data === "function") {
      setInvoiceData((prevData) => {
        const newData = data(prevData);
        saveInvoice(newData);
        return newData;
      });
    } else {
      setInvoiceData(data);
      saveInvoice(data);
    }
  }, []);

  return {
    invoiceData,
    setInvoiceData: setInvoiceDataWithPersistence,
    isLoading,
    error,
    loadInvoice,
    updateInvoiceData,
  };
};
