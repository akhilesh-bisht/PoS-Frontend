import React from "react";
import Pagination from "../Sales/Pagination";
const ReturnsSection = () => {
  return (
    <section id="returns" className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-4">
          <h2 className=" sm:text-2xl font-semibold w-[112px] sm:w-full">
            Sales Returns
          </h2>
          <button className="bg-blue-600 text-white   px-2  sm:px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors text-xs sm:text-base w-32 sm:w-full">
            <svg
              className=" w-3 h-3 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            New Return
          </button>
        </div>
        <div className="flex flex-wrap gap-3">
          <select className=" px-2 sm:px-4 py-1 sm:py-2 border border-gray-300 text-xs sm:text-sm md:text-base  rounded-lg focus:outline-none focus:border-blue-500">
            <option>All Returns</option>
            <option>Pending</option>
            <option>Processed</option>
            <option>Rejected</option>
          </select>
          <input
            type="date"
            className="px-4 text-xs sm:text-base sm:py-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      {/* Return Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          {
            title: "Total Returns",
            count: 32,
            value: "₹85,000",
            note: "This Month",
            color: "text-blue-600",
          },
          {
            title: "Pending Returns",
            count: 8,
            value: "₹25,000",
            note: "Action Needed",
            color: "text-orange-600",
          },
          {
            title: "Processed Returns",
            count: 20,
            value: "₹52,000",
            note: "Completed",
            color: "text-green-600",
          },
          {
            title: "Rejected Returns",
            count: 4,
            value: "₹8,000",
            note: "Not Eligible",
            color: "text-red-600",
          },
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg border border-gray-200"
          >
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-600">
                {stat.title}
              </span>
              <span className={`text-xs ${stat.color}`}>{stat.note}</span>
            </div>
            <p className=" text-lg sm:text-2xl font-semibold mt-2">
              {stat.count}
            </p>
            <p className="text-sm text-gray-500 mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Return Reasons Chart */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">Return Reasons Analysis</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            {[
              {
                label: "Damaged Product",
                percentage: "35%",
                color: "bg-red-500",
              },
              {
                label: "Wrong Product",
                percentage: "25%",
                color: "bg-blue-500",
              },
              {
                label: "Quality Issues",
                percentage: "40%",
                color: "bg-green-500",
              },
            ].map((reason, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 ${reason.color} rounded-full`}></div>
                  <span className="text-sm text-gray-600">{reason.label}</span>
                </div>
                <span className="text-sm font-medium">{reason.percentage}</span>
              </div>
            ))}
          </div>
          <div className="h-48 bg-gray-50 rounded flex items-center justify-center">
            <span className="text-gray-500">Returns Distribution Chart</span>
          </div>
        </div>
      </div>

      {/* Recent Returns */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold">Recent Returns</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {[
                  "Return ID",
                  "Customer",
                  "Product",
                  "Date",
                  "Amount",
                  "Status",
                  "Actions",
                ].map((heading, index) => (
                  <th
                    key={index}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[
                {
                  id: "#RET-001",
                  customer: "Rajesh Kumar",
                  contact: "+91 98765 43210",
                  product: "NPK Fertilizer 50kg",
                  date: "Aug 15, 2023",
                  amount: "₹4,500",
                  status: "Pending",
                  statusColor: "bg-yellow-100 text-yellow-800",
                },
                {
                  id: "#RET-002",
                  customer: "Suresh Patel",
                  contact: "+91 98765 43211",
                  product: "Wheat Seeds 25kg",
                  date: "Aug 14, 2023",
                  amount: "₹2,800",
                  status: "Processed",
                  statusColor: "bg-green-100 text-green-800",
                },
              ].map((returnItem, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900">
                    {returnItem.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <img
                        className=" w-4 h-4 sm:h-8 sm:w-8 rounded-full"
                        src="https://avatar.iran.liara.run/public"
                        alt=""
                      />
                      <div className="ml-4">
                        <div className="text-xs sm:text-sm  font-medium text-gray-900">
                          {returnItem.customer}
                        </div>
                        <div className="text-xs sm:text-sm text-gray-500">
                          {returnItem.contact}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs sm:text-sm  text-gray-900">
                    {returnItem.product}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs sm:text-sm  text-gray-500">
                    {returnItem.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs sm:text-sm  text-gray-900">
                    {returnItem.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${returnItem.statusColor}`}
                    >
                      {returnItem.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-xs sm:text-sm  font-medium">
                    <button className="text-blue-600 hover:text-blue-900">
                      Process
                    </button>
                    <button className="ml-3 text-red-600 hover:text-red-900">
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Pagination totalResults={30} currentPage={1} resultsPerPage={10} />
    </section>
  );
};

export default ReturnsSection;
