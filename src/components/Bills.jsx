import React, { useState } from "react";
import jsPDF from "jspdf";
import { useSelector } from "react-redux";

const BillsAccordion = () => {
  const [openBill, setOpenBill] = useState(null);

  // Fetch cart data from Redux store
  const cartItems = useSelector((state) => state.cart.cart);

  // Generate a bill based on the cart data
  const generateBillData = () => {
    const totalQty = cartItems.reduce(
      (totalQty, item) => totalQty + item.qty,
      0
    );
    const subtotal = cartItems.reduce(
      (total, item) => total + item.qty * item.price,
      0
    );
    const totalDiscount = cartItems.reduce(
      (total, item) =>
        total +
        (item.discount
          ? (item.price * item.qty * parseFloat(item.discount)) / 100
          : 0),
      0
    );
    const totalEarnings = subtotal - totalDiscount;
    const superTotal = subtotal - totalDiscount;
    const billDate =
      cartItems.length > 0 ? cartItems[0].addedAt : new Date().toLocaleString();

    return {
      id: 1, // Static ID, could be dynamic based on customer or session
      customerName: "John Doe",
      phone: "+91 9876543210",
      date: billDate,
      items: cartItems.map((item) => ({
        name: item.name,
        qty: item.qty,
        price: item.price,
        discount: item.discount || "0",
        total: item.qty * item.price,
      })),
      subtotal,
      totalDiscount,
      totalEarnings,
      superTotal,
    };
  };

  const bill = generateBillData();
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
    </div>
  );
};

export default BillsAccordion;
