import defaultInvoice from '../data/invoice';

const INVOICE_KEY = 'invoice_data';

export const getStoredInvoice = () => {
  try {
    const storedData = localStorage.getItem(INVOICE_KEY);
    return storedData ? JSON.parse(storedData) : defaultInvoice;
  } catch (error) {
    console.error('Error al recuperar datos del localStorage:', error);
    return defaultInvoice;
  }
};

export const saveInvoice = (invoiceData) => {
  try {
    localStorage.setItem(INVOICE_KEY, JSON.stringify(invoiceData));
    return true;
  } catch (error) {
    console.error('Error al guardar datos en localStorage:', error);
    return false;
  }
};

export const updateInvoice = (invoiceData) => {
  return saveInvoice(invoiceData);
};

export const resetInvoice = () => {
  try {
    localStorage.removeItem(INVOICE_KEY);
    return true;
  } catch (error) {
    console.error('Error al resetear datos en localStorage:', error);
    return false;
  }
};

