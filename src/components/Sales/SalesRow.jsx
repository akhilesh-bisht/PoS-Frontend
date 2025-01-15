import React from "react";

const SalesRow = ({
  invoiceId,
  customer,
  date,
  items,
  amount,
  status,
  statusColor,
}) => {
  return (
    <tr className="hover:bg-gray-50">
      <td className="px-6 py-4 whitespace-nowrap  text-xs  sm:text-sm font-medium text-gray-900">
        {invoiceId}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-xs  sm:text-sm ">
        <div className="flex items-center">
          <img
            className="h-8 w-8 rounded-full"
            src="https://avatar.iran.liara.run/public"
            alt={customer.name}
          />
          <div className="ml-4  ">
            <div className="font-medium text-gray-900 text-xs  sm:text-sm ">
              {customer.name}
            </div>
            <div className="text-xs  sm:text-sm  text-gray-500">
              {customer.phone}
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap  text-gray-500 text-xs  sm:text-sm ">
        {date}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-xs  sm:text-sm  text-gray-500">
        {items}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-xs  sm:text-sm  text-gray-900">
        {amount}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-xs  sm:text-sm ">
        <span
          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColor}`}
        >
          {status}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right  font-medium text-xs  sm:text-sm ">
        <button className="text-blue-600 hover:text-blue-900">View</button>
        <button className="ml-3 text-blue-600 hover:text-blue-900">
          Print
        </button>
      </td>
    </tr>
  );
};

export default SalesRow;
