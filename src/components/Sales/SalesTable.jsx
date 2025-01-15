import React from "react";
import SalesRow from "./SalesRow";

const data = [
  {
    invoiceId: "#INV-001",
    customer: { name: "Rajesh Kumar", phone: "+91 98765 43210" },
    date: "Aug 15, 2023",
    items: "4 items",
    amount: "₹12,500",
    status: "Paid",
    statusColor: "bg-green-100 text-green-800",
  },
  {
    invoiceId: "#INV-002",
    customer: { name: "Suresh Patel", phone: "+91 98765 43211" },
    date: "Aug 14, 2023",
    items: "2 items",
    amount: "₹8,750",
    status: "Pending",
    statusColor: "bg-yellow-100 text-yellow-800",
  },
];

const SalesTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {[
              "Invoice ID",
              "Customer",
              "Date",
              "Items",
              "Amount",
              "Status",
              "Actions",
            ].map((header) => (
              <th
                key={header}
                className="px-6 py-3 text-left  text-[10px]         sm:text-xs font-medium text-gray-500 uppercase"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, index) => (
            <SalesRow key={index} {...row} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesTable;
