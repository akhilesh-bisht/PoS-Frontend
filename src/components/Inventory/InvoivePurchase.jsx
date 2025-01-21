import React from "react";
import { IoCloseSharp } from "react-icons/io5";

const InvoiceDetails = ({
  isOpen,
  invoiceData,
  handleChange,
  handlePurchaseSubmit,
  togglePurchasePopup,
}) => {
  return (
    <>
      <div
        onClick={togglePurchasePopup}
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      ></div>
      <div
        className={`fixed top-0 right-0 w-full md:w-1/3 h-full bg-white shadow-lg z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center">
            <h3 className="text-base md:text-lg font-medium mb-4">
              Purchase Invoice Details
            </h3>
            <div>
              <IoCloseSharp
                onClick={togglePurchasePopup}
                size={30}
                className="cursor-pointer"
              />
            </div>
          </div>
          <form onSubmit={handlePurchaseSubmit} className="space-y-4 text-sm">
            <label htmlFor="purchaseDate" className="block text-gray-700">
              Purchase Date
            </label>
            <input
              type="date"
              id="purchaseDate"
              name="purchaseDate"
              value={invoiceData.purchaseDate}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
            <label htmlFor="partyId" className="block text-gray-700">
              Party ID
            </label>
            <input
              type="text"
              id="partyId"
              name="partyId"
              value={invoiceData.partyId}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
            <label htmlFor="purchaseInvoice" className="block text-gray-700">
              Purchase Invoice
            </label>
            <input
              type="text"
              id="purchaseInvoice"
              name="purchaseInvoice"
              value={invoiceData.purchaseInvoice}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default InvoiceDetails;
