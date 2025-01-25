import React, { useCallback } from "react";
import { IoCloseSharp } from "react-icons/io5";

// Using React.memo to prevent unnecessary re-renders if props don't change
const InvoiceDetails = React.memo(
  ({
    isOpen,
    invoiceData,
    handleChange,
    handlePurchaseSubmit,
    togglePurchasePopup,
  }) => {
    // Memoizing the overlay click handler with useCallback to avoid re-creating it on each render
    const handleOverlayClick = useCallback(() => {
      togglePurchasePopup(); // Toggle purchase popup visibility
    }, [togglePurchasePopup]);

    return (
      <>
        {/* Overlay that darkens the background and disables pointer events when not open */}
        <div
          onClick={handleOverlayClick} // Using the memoized function for overlay click
          className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        />

        {/* Slide-in panel for invoice details */}
        <div
          className={`fixed top-0 right-0 w-full md:w-1/3 h-full bg-white shadow-lg z-50 transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6">
            {/* Header section with title and close button */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-base md:text-lg font-medium">
                Purchase Invoice Details
              </h3>
              <IoCloseSharp
                onClick={handleOverlayClick} // Using the memoized function for closing
                size={30}
                className="cursor-pointer"
              />
            </div>

            {/* Form for entering invoice details */}
            <form onSubmit={handlePurchaseSubmit} className="space-y-4 text-sm">
              {/* Purchase Date Input */}
              <div>
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
              </div>

              {/* Party ID Input */}
              <div>
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
              </div>

              {/* Purchase Invoice Input */}
              <div>
                <label
                  htmlFor="purchaseInvoice"
                  className="block text-gray-700"
                >
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
              </div>

              {/* Submit Button */}
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
  }
);

export default InvoiceDetails;
