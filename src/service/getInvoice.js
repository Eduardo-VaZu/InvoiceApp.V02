import { getStoredInvoice } from "./localStorageService";

export const getInvoice = () => {
  return getStoredInvoice();
};

