import React from "react";

// Memoized PaymentTimeline component
const PaymentTimeline = React.memo(({ timeline }) => (
  <div className="bg-white p-6 rounded-lg border border-gray-200">
    <h3 className="sm:text-lg font-semibold mb-4">Payment Timeline</h3>
    <div className="space-y-4">
      {timeline.map((item, index) => (
        <div key={index} className="flex items-center">
          <div className="w-24 text-[10px] sm:text-sm text-gray-600">
            {item.period}
          </div>
          <div className="flex-1 ml-4">
            <div className={`h-2 ${item.bg} rounded-full`}>
              <div
                className={`h-2 ${item.color} rounded-full`}
                style={{ width: item.width }}
              ></div>
            </div>
          </div>
          <div className="ml-4 text-xs sm:text-sm font-medium text-gray-900">
            {item.amount}
          </div>
        </div>
      ))}
    </div>
  </div>
));

export default PaymentTimeline;
