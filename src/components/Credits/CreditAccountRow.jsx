import React from "react";

const CreditAccountRow = ({ account }) => (
  <tr className="hover:bg-gray-50">
    <td className="px-6 py-4 whitespace-nowrap">
      <div className="flex items-center">
        <img
          className=" h-4 w-4 sm:h-8 sm:w-8 rounded-full"
          src="https://avatar.iran.liara.run/public"
          alt="Avatar"
        />
        <div className="ml-4">
          <div className=" text-xs sm:text-sm font-medium text-gray-900">
            {account.customer}
          </div>
          <div className="text-xs sm:text-sm  text-gray-500">
            {account.phone}
          </div>
        </div>
      </div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
      {account.amount}
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500">
      {account.dueDate}
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
      <span
        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${account.statusColor}`}
      >
        {account.status}
      </span>
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
      {account.lastPayment}
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-right text-xs sm:text-sm  font-medium">
      <button className="text-blue-600 hover:text-blue-900">
        Record Payment
      </button>
      <button className="ml-3 text-gray-600 hover:text-gray-900">
        Send Reminder
      </button>
    </td>
  </tr>
);

export default CreditAccountRow;
