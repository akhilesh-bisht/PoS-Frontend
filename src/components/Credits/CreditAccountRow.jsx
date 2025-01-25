import React, { memo, useCallback } from "react";

const CreditAccountRow = memo(({ account }) => {
  // Handlers for button actions
  const handleRecordPayment = useCallback(() => {
    console.log("Record Payment clicked for:", account.customer);
  }, [account.customer]);

  const handleSendReminder = useCallback(() => {
    console.log("Send Reminder clicked for:", account.customer);
  }, [account.customer]);

  return (
    <tr className="hover:bg-gray-50">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <img
            loading="lazy"
            className="h-4 w-4 sm:h-8 sm:w-8 rounded-full"
            src="https://avatar.iran.liara.run/public"
            alt={`Avatar of ${account.customer}`} // Improved alt text
          />
          <div className="ml-4">
            <div className="text-xs sm:text-sm font-medium text-gray-900">
              {account.customer}
            </div>
            <div className="text-xs sm:text-sm text-gray-500">
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
      <td className="px-6 py-4 whitespace-nowrap text-right text-xs sm:text-sm font-medium">
        <button
          onClick={handleRecordPayment}
          className="text-blue-600 hover:text-blue-900"
        >
          Record Payment
        </button>
        <button
          onClick={handleSendReminder}
          className="ml-3 text-gray-600 hover:text-gray-900"
        >
          Send Reminder
        </button>
      </td>
    </tr>
  );
});

export default CreditAccountRow;
