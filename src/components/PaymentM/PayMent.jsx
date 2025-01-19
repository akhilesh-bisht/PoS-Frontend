import React from "react";
import Button from "../Button";
const PaymentManagement = () => {
  const transactions = [
    {
      id: "#TRX-001",
      date: "Aug 15, 2023",
      name: "Rajesh Kumar",
      type: "Received",
      method: "UPI",
      amount: "₹25,000",
      role: "Customer",
      badgeColor: "bg-green-100 text-green-800",
    },
    {
      id: "#TRX-002",
      date: "Aug 14, 2023",
      name: "Farm Solutions Inc",
      type: "Paid",
      method: "Bank Transfer",
      amount: "₹45,000",
      role: "Supplier",
      badgeColor: "bg-blue-100 text-blue-800",
    },
  ];

  return (
    <section id="payments" className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center md:gap-4">
          <h2 className=" md:text-2xl  font-semibold w-full">
            Payment Management
          </h2>

          <Button
            label=" Record Payment"
            icon={
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            }
            styles="bg-blue-500 hover:bg-blue-600 w-56 md:w-48 xl:w-48"
          />
        </div>

        <div className="flex flex-wrap gap-3">
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-xs sm:text-base">
            <option>All Payments</option>
            <option>Received</option>
            <option>Made</option>
            <option>Pending</option>
          </select>
          <div className="relative">
            <input
              type="date"
              className=" px-2 sm:px-4  py-1 sm:py-2 border text-sm border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Payment Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Total Received", value: "₹3,85,000", transactions: 42 },
          { label: "Total Paid", value: "₹2,45,000", transactions: 28 },
          { label: "Pending", value: "₹95,000", transactions: 15 },
          { label: "Today's Collections", value: "₹45,000", transactions: 8 },
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg border border-gray-200"
          >
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-600">
                {stat.label}
              </span>
              <span className="text-green-600 text-xs">This Month</span>
            </div>
            <p className="  sm:text-2xl font-semibold mt-2">{stat.value}</p>
            <p className=" text-sm text-gray-500 mt-1">
              {stat.transactions} transactions
            </p>
          </div>
        ))}
      </div>

      {/* Payment Methods */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Payment Methods</h3>
          {[
            { method: "Cash", percentage: "45%", color: "bg-blue-500" },
            { method: "UPI", percentage: "35%", color: "bg-green-500" },
            {
              method: "Bank Transfer",
              percentage: "20%",
              color: "bg-yellow-500",
            },
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <div className={`w-3 h-3 ${item.color} rounded-full`}></div>
                <span className="ml-2 text-sm text-gray-600">
                  {item.method}
                </span>
              </div>
              <span className="text-sm font-medium">{item.percentage}</span>
            </div>
          ))}
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Payment Trends</h3>
          <div className="h-48 bg-gray-50 rounded flex items-center justify-center">
            <span className="text-gray-500">
              Payment Trend Chart Placeholder
            </span>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="px-3 py-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className=" w-48 sm:w-full sm:text-lg font-semibold ">
            Recent Transactions
          </h3>
          <button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900">
            View All
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Transaction ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Customer/Supplier
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Method
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap  text-xs sm:text-sm font-medium text-gray-900 ">
                    {transaction.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap  text-xs sm:text-sm text-gray-500">
                    {transaction.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap  text-xs sm:text-sm">
                    {transaction.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap  text-xs sm:text-sm">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${transaction.badgeColor}`}
                    >
                      {transaction.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap  text-xs sm:text-sm text-gray-500">
                    {transaction.method}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap  text-xs sm:text-sm text-gray-900">
                    {transaction.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PaymentManagement;
