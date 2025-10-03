import { useCallback, useEffect, useState } from "react";
import { getInvoice } from "../service/getInvoice";
import { saveInvoice, updateInvoice } from "../service/localStorageService";

const useInvoiceData = () => {
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
  
  // Estados para manejar carga y errores
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Función para cargar los datos de la factura desde localStorage
  const loadInvoice = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Simulamos una carga asíncrona
      const data = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(getInvoice());
        }, 500); // Simula un retraso de 500ms
      });
      
      setInvoiceData(data);
    } catch (err) {
      setError("Error al cargar los datos de la factura: " + err.message);
      console.error("Error al cargar los datos:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Función para actualizar los datos de la factura con persistencia en localStorage
  const updateInvoiceData = useCallback(async (newData) => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Actualizamos el estado local
      const updatedData = {
        ...invoiceData,
        ...newData
      };
      
      setInvoiceData(updatedData);
      
      // Guardamos en localStorage
      const success = updateInvoice(updatedData);
      
      if (!success) {
        throw new Error("No se pudo guardar en localStorage");
      }
      
      return true; // Indica éxito
    } catch (err) {
      setError("Error al actualizar los datos: " + err.message);
      console.error("Error al actualizar datos:", err);
      return false; // Indica fallo
    } finally {
      setIsLoading(false);
    }
  }, [invoiceData]);

  // Función para guardar cambios en el estado directamente en localStorage
  const setInvoiceDataWithPersistence = useCallback((data) => {
    // Si es una función, la ejecutamos para obtener el nuevo estado
    if (typeof data === 'function') {
      setInvoiceData(prevData => {
        const newData = data(prevData);
        saveInvoice(newData); // Guardamos en localStorage
        return newData;
      });
    } else {
      // Si es un objeto, lo guardamos directamente
      setInvoiceData(data);
      saveInvoice(data); // Guardamos en localStorage
    }
  }, []);

  useEffect(() => {
    loadInvoice();
  }, [loadInvoice]);

  return {
    invoiceData,
    setInvoiceData: setInvoiceDataWithPersistence, // Reemplazamos por la versión con persistencia
    isLoading,
    error,
    loadInvoice,
    updateInvoiceData,
  };
};

export default useInvoiceData;
