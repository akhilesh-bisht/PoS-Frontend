import React, { useState } from "react";
import jsPDF from "jspdf";

const billsData = [
  {
    id: 1,
    customerName: "John Doe",
    phone: "+91 9876543210",
    date: "15 Jan 2024, 2:30 PM",
    items: [
      {
        name: "Product Name 1",
        qty: 2,
        price: 500,
        discount: "10%",
        total: 1000,
      },
      {
        name: "Product Name 2",
        qty: 3,
        price: 500,
        discount: "0",
        total: 1500,
      },
      {
        name: "Product Name 3",
        qty: 4,
        price: 500,
        discount: "5%",
        total: 2000,
      },
    ],
    subtotal: 4500,
    totalDiscount: 300,
    totalEarnings: 900,
    superTotal: 4200,
  },
  // Add more bill data here...
];

const BillsAccordion = () => {
  const [openBill, setOpenBill] = useState(null);

  const toggleAccordion = (id) => {
    setOpenBill(openBill === id ? null : id);
  };

  // Function to download the bill as PDF
  const downloadBillAsPDF = (bill) => {
    const doc = new jsPDF();

    // Add bill details to the PDF
    doc.setFontSize(16);
    doc.text(`Customer Name: ${bill.customerName}`, 10, 10);
    doc.text(`Phone: ${bill.phone}`, 10, 20);
    doc.text(`Date: ${bill.date}`, 10, 30);

    doc.setFontSize(14);
    doc.text("Items:", 10, 40);

    // Add items
    let yPosition = 50;
    bill.items.forEach((item) => {
      doc.text(
        `${item.name} - Qty: ${item.qty} x ₹${item.price} (${item.discount}) - Total: ₹${item.total}`,
        10,
        yPosition
      );
      yPosition += 10;
    });

    // Add totals
    yPosition += 10;
    doc.text(`Subtotal: ₹${bill.subtotal}`, 10, yPosition);
    doc.text(`Total Discount: -₹${bill.totalDiscount}`, 10, yPosition + 10);
    doc.text(`Total Earnings: +₹${bill.totalEarnings}`, 10, yPosition + 20);
    doc.text(`Super Total: ₹${bill.superTotal}`, 10, yPosition + 30);

    // Save the PDF
    doc.save(`${bill.customerName}_Bill.pdf`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Bills</h1>
      {billsData.map((bill) => (
        <div
          key={bill.id}
          className="border rounded-lg shadow-md w-full p-4 mb-4"
        >
          {/* Accordion Header */}
          <button
            onClick={() => toggleAccordion(bill.id)}
            className="w-full text-left flex items-center justify-between text-lg font-medium text-blue-600"
          >
            {bill.customerName} - {bill.date}
            <span>{openBill === bill.id ? "-" : "+"}</span>
          </button>

          {/* Accordion Content */}
          {openBill === bill.id && (
            <div className="mt-4">
              <div className="mb-4">
                <p>
                  <strong>Phone:</strong> {bill.phone}
                </p>
                <p>
                  <strong>Date:</strong> {bill.date}
                </p>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2">Items</h2>
                {bill.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between text-sm mb-2 border-b pb-2"
                  >
                    <div>
                      <p>{item.name}</p>
                      <p className="text-gray-500">
                        Qty: {item.qty} x ₹{item.price} ({item.discount})
                      </p>
                    </div>
                    <p>₹{item.total}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-sm">
                <p>
                  <strong>Subtotal:</strong> ₹{bill.subtotal}
                </p>
                <p className="text-red-500">
                  <strong>Total Discount:</strong> -₹{bill.totalDiscount}
                </p>
                <p className="text-green-500">
                  <strong>Total Earnings:</strong> +₹{bill.totalEarnings}
                </p>
                <p className="text-lg font-semibold">
                  <strong>Super Total:</strong> ₹{bill.superTotal}
                </p>
              </div>
              {/* Download Button */}
              <button
                onClick={() => downloadBillAsPDF(bill)}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Download as PDF
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default BillsAccordion;
