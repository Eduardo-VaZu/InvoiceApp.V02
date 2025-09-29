import getInvoice from "../service/getInvoice";
import InvoiceHeader from "./invoice/InvoiceHeader";
import InvoiceInformation from "./invoice/InvoiceInformation";
import InvoiceItems from "./invoice/InvoiceItems";
import InvoiceTotal from "./invoice/InvoiceTotal";

const InvoiceApp = () => {
  const invoiceData = getInvoice();
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
            <InvoiceItems items={invoiceData.items} />
            <InvoiceTotal items={invoiceData.items} />
          </div>
        </div>
      </div>
    </>
  );
};

export default InvoiceApp;
