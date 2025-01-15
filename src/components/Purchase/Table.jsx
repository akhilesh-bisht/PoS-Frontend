import React from "react";

const Table = () => {
  const purchaseOrders = [
    {
      poNumber: "#PO-2023-001",
      supplier: "Agro Suppliers Ltd",
      supplierEmail: "supplier@agro.com",
      orderDate: "Aug 15, 2023",
      items: "8 items",
      amount: "₹45,000",
      status: "Delivered",
    },
    {
      poNumber: "#PO-2023-002",
      supplier: "Farm Solutions Inc",
      supplierEmail: "info@farmsolutions.com",
      orderDate: "Aug 14, 2023",
      items: "5 items",
      amount: "₹32,500",
      status: "Pending",
    },
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
        <h3 className=" text-sm lg:text-lg font-semibold">
          Recent Purchase Orders
        </h3>
        <div className="flex gap-2">
          <button className="px-3 py-1 text-[10px] md:text-sm border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-1">
            <svg
              className="  w-3 h-3 lg:w-4 lg:h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Export
          </button>
          <button className="px-3 py-1 text-[10px] md:text-sm border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-1">
            <svg
              className="w-3 h-3 lg:w-4 lg:h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
              />
            </svg>
            Filter
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left      text-xs font-medium text-gray-500 uppercase">
                PO Number
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Supplier
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Order Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Items
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Status
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {purchaseOrders.map((order, index) => (
              <tr className="hover:bg-gray-50" key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-[11px] sm:text-sm font-medium text-gray-900">
                  {order.poNumber}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://avatar.iran.liara.run/public"
                      alt=""
                    />
                    <div className="ml-4">
                      <div className="text-[11px] sm:text-smfont-medium text-gray-900">
                        {order.supplier}
                      </div>
                      <div className="text-[11px] sm:text-smtext-gray-500">
                        {order.supplierEmail}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-[11px] sm:text-sm text-gray-500">
                  {order.orderDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-[11px] sm:text-smtext-gray-500">
                  {order.items}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-[11px] sm:text-smtext-gray-900">
                  {order.amount}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-[11px] sm:text-sm leading-5 font-semibold rounded-full ${
                      order.status === "Delivered"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-[11px] sm:text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900">
                    View
                  </button>
                  <button className="ml-3 text-gray-600 hover:text-gray-900">
                    Invoice
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
