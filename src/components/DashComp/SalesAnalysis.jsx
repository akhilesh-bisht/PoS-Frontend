import React, { useState } from "react";
import GraphSaleAnaylysis from "../GraphSalesAnalyse";
// Reusable Product Row Component
const ProductRow = React.memo(({ name, stock, sales }) => (
  <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
    <div className="flex items-center">
      <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center">
        <svg
          className="w-5 h-5 md:w-6 md:h-6 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      </div>
      <div className="ml-2 md:ml-4">
        <p className="text-sm font-medium">{name}</p>
        <p className="text-xs md:text-sm text-gray-500">Stock: {stock}</p>
      </div>
    </div>
    <span className="text-green-500 font-medium text-sm">{sales} sales</span>
  </div>
));

// Reusable Credit Row Component
const CreditRow = React.memo(({ name, dueDate, amount }) => (
  <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
    <div className="flex items-center">
      <img
        src="https://avatar.iran.liara.run/public"
        alt={name}
        className="w-7 h-7 md:w-10 md:h-10 rounded-full"
      />
      <div className="ml-2 md:ml-4">
        <p className="font-medium text-sm md:text-lg">{name}</p>
        <p className="text-xs md:text-sm text-gray-500">Due: {dueDate}</p>
      </div>
    </div>
    <span className="text-red-500 text-sm md:text-base font-medium">
      ₹{amount}
    </span>
  </div>
));

const SalesAnalysis = () => {
  // const [selectedTimeFrame, setSelectedTimeFrame] = useState("Last 7 days");

  // const handleTimeFrameChange = (e) => {
  //   setSelectedTimeFrame(e.target.value);
  // };

  return (
    <section className=" sm:p-6 space-y-6">
      {/* Sales Analysis Chart */}

      <div className="bg-white   mt-2 ml-2 sm:mt-0 sm:ml-0 sm:p-6 rounded-lg border border-gray-200">
        <h1 className="text-base md:text-xl font-semibold">Sales Analysis </h1>
        <GraphSaleAnaylysis />
      </div>

      {/* Fast Moving Products and Recent Credits in One Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Fast Moving Products */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h2 className="text-base md:text-lg font-semibold mb-4">
            Fast Moving Products
          </h2>
          <div className="space-y-4">
            <ProductRow name="NPK Fertilizer" stock="250 units" sales="86" />
            <ProductRow name="Wheat Seeds" stock="180 kg" sales="64" />
          </div>
        </div>

        {/* Recent Credits */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h2 className="text-base md:text-lg font-semibold mb-4">
            Recent Credits
          </h2>
          <div className="space-y-4">
            <CreditRow
              name="Rajesh Kumar"
              dueDate="15 Aug 2023"
              amount="12,500"
            />
            <CreditRow
              name="Suresh Patel"
              dueDate="18 Aug 2023"
              amount="8,750"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesAnalysis;
