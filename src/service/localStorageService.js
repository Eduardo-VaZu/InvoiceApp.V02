import defaultInvoice from '../data/invoice';

const INVOICE_KEY = 'invoice_data';

// Obtener datos de la factura desde localStorage o usar datos por defecto
export const getStoredInvoice = () => {
  try {
    const storedData = localStorage.getItem(INVOICE_KEY);
    return storedData ? JSON.parse(storedData) : defaultInvoice;
  } catch (error) {
    console.error('Error al recuperar datos del localStorage:', error);
    return defaultInvoice;
  }
};

// Guardar datos de la factura en localStorage
export const saveInvoice = (invoiceData) => {
  try {
    localStorage.setItem(INVOICE_KEY, JSON.stringify(invoiceData));
    return true;
  } catch (error) {
    console.error('Error al guardar datos en localStorage:', error);
    return false;
  }
};

// Actualizar datos de la factura en localStorage
export const updateInvoice = (invoiceData) => {
  return saveInvoice(invoiceData);
};

// Limpiar datos de la factura (volver a valores por defecto)
export const resetInvoice = () => {
  try {
    localStorage.removeItem(INVOICE_KEY);
    return true;
  } catch (error) {
    console.error('Error al resetear datos en localStorage:', error);
    return false;
  }
};