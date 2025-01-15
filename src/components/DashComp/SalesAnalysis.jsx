import React, { useState } from "react";

const SalesAnalysis = () => {
  const [selectedTimeFrame, setSelectedTimeFrame] = useState("Last 7 days");

  const handleTimeFrameChange = (e) => {
    setSelectedTimeFrame(e.target.value);
  };

  return (
    <section className="p-6 space-y-6">
      {/* Sales Analysis Chart */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <h2 className=" text-base md:text-lg font-semibold">
            Sales Analysis
          </h2>
          <select
            className="border border-gray-300 rounded px-1 md:px-3 py-1 text-xs md:text-sm"
            value={selectedTimeFrame}
            onChange={handleTimeFrameChange}
          >
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 3 months</option>
          </select>
        </div>
        <div className="h-64 bg-gray-50 rounded border border-gray-200 flex items-center justify-center">
          <span className="text-gray-500 text-sm md:text-base">
            Sales Chart Placeholder for {selectedTimeFrame}
          </span>
        </div>
      </div>

      {/* Fast Moving Products and Recent Credits in One Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Fast Moving Products */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h2 className=" text-base md:text-lg font-semibold mb-4">
            Fast Moving Products
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center">
                  <svg
                    className=" w-5 h-5  md:w-6 md:h-6 text-gray-600"
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
                <div className=" ml-2 md:ml-4">
                  <p className=" text-sm font-medium">NPK Fertilizer</p>
                  <p className=" text-xs md:text-sm text-gray-500">
                    Stock: 250 units
                  </p>
                </div>
              </div>
              <span className=" text-green-500 font-medium text-sm">
                86 sales
              </span>
            </div>

            <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center">
                  <svg
                    className=" w-5 h-5 md:w-6 md:h-6 text-gray-600"
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
                  <p className=" text-sm font-medium">Wheat Seeds</p>
                  <p className="text-xs text-gray-500">Stock: 180 kg</p>
                </div>
              </div>
              <span className="text-green-500 text-sm font-medium">
                64 sales
              </span>
            </div>
          </div>
        </div>

        {/* Recent Credits */}
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h2 className=" text-base md:text-lg font-semibold mb-4">
            Recent Credits
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
              <div className="flex items-center">
                <img
                  src="https://avatar.iran.liara.run/public"
                  alt="Farmer"
                  className=" w-7 h-7 md:w-10 md:h-10 rounded-full"
                />
                <div className="  ml-2 md:ml-4">
                  <p className="font-medium text-sm md:text-lg">Rajesh Kumar</p>
                  <p className=" text-xs md:text-sm text-gray-500">
                    Due: 15 Aug 2023
                  </p>
                </div>
              </div>
              <span className="text-red-500 text-sm md:text-base font-medium ">
                ₹12,500
              </span>
            </div>
            <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
              <div className="flex items-center">
                <img
                  src="https://avatar.iran.liara.run/public"
                  alt="Farmer"
                  className=" w-7 h-7 md:w-10 md:h-10 rounded-full"
                />
                <div className=" ml-2 md:ml-4">
                  <p className="font-medium">Suresh Patel</p>
                  <p className=" text-xs md:text-sm text-gray-500">
                    Due: 18 Aug 2023
                  </p>
                </div>
              </div>
              <span className="text-red-500 text-sm md:text-base font-medium">
                ₹8,750
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesAnalysis;
