import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import InvoiceApp from "./Components/InvoiceApp";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <InvoiceApp />
  </StrictMode>
);
