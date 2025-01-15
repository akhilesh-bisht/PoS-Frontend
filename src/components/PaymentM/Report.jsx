import React from "react";

const ReportsPage = () => {
  return (
    <section id="reports" className="px-4 py-8 bg-neutral-900 min-h-screen">
      <div className="max-w-7xl ">
        {/* Header */}
        <div className="mb-8">
          <h2 className=" text-xl sm:text-3xl font-bold text-white mb-2">
            Reports & Analytics
          </h2>
          <p className=" text-sm sm:text-base text-neutral-400">
            Generate and export detailed business insights
          </p>
        </div>

        {/* Export Controls */}
        <div className="flex flex-wrap gap-4 mb-8 p-4 bg-neutral-800/50 rounded-lg border border-neutral-700/30">
          <div className="flex-1">
            <label className="block text-sm font-medium text-neutral-300 mb-2">
              Date Range
            </label>
            <div className="  sm:flex sm:gap-2 text-sm sm:text-base">
              <input
                type="date"
                className="bg-neutral-800 border border-neutral-700 rounded-md px-3 py-2 text-neutral-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="date"
                className="bg-neutral-800 border border-neutral-700 rounded-md px-3 py-2 text-neutral-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent mt-3 sm:mt-0"
              />
            </div>
          </div>
          <div className="w-48">
            <label className="block text-sm font-medium text-neutral-300 mb-2">
              Report Type
            </label>
            <select className="w-full bg-neutral-800 border border-neutral-700 rounded-md px-3 py-2 text-neutral-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base">
              <option>Sales Report</option>
              <option>Inventory Report</option>
              <option>Credit Report</option>
              <option>Product Performance</option>
            </select>
          </div>
          <div className="w-48">
            <label className="block text-sm font-medium text-neutral-300 mb-2">
              Export Format
            </label>
            <select className="w-full bg-neutral-800 border border-neutral-700 rounded-md px-3 py-2 text-neutral-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base">
              <option>PDF</option>
              <option>Excel</option>
              <option>CSV</option>
            </select>
          </div>
          <div className="flex items-end">
            <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-200 ">
              Generate Report
            </button>
          </div>
        </div>

        {/* Quick Reports Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="p-6 bg-neutral-800/50 rounded-lg border border-neutral-700/30 hover:border-neutral-600/50 transition-colors duration-200">
            <h3 className="text-xl font-semibold text-white mb-4">
              Sales Summary
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-neutral-400">Today's Sales</span>
                <span className="text-white font-medium">₹24,500</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-neutral-400">This Week</span>
                <span className="text-white font-medium">₹1,68,000</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-neutral-400">This Month</span>
                <span className="text-white font-medium">₹5,24,000</span>
              </div>
            </div>
          </div>

          <div className="p-6 bg-neutral-800/50 rounded-lg border border-neutral-700/30 hover:border-neutral-600/50 transition-colors duration-200">
            <h3 className="text-xl font-semibold text-white mb-4">
              Inventory Status
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-neutral-400">Low Stock Items</span>
                <span className="text-yellow-500 font-medium">12 items</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-neutral-400">Out of Stock</span>
                <span className="text-red-500 font-medium">5 items</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-neutral-400">Expiring Soon</span>
                <span className="text-orange-500 font-medium">8 items</span>
              </div>
            </div>
          </div>

          <div className="p-6 bg-neutral-800/50 rounded-lg border border-neutral-700/30 hover:border-neutral-600/50 transition-colors duration-200">
            <h3 className="text-xl font-semibold text-white mb-4">
              Credit Overview
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-neutral-400">Total Outstanding</span>
                <span className="text-white font-medium">₹1,24,500</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-neutral-400">Overdue Amount</span>
                <span className="text-red-500 font-medium">₹45,000</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-neutral-400">Due This Week</span>
                <span className="text-yellow-500 font-medium">₹28,000</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Reports */}
        <div className="bg-neutral-800/50 rounded-lg border border-neutral-700/30">
          <div className="p-4 border-b border-neutral-700/30">
            <h3 className="text-lg font-semibold text-white">Recent Reports</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-neutral-300">
              <thead className="text-[10px] sm:text-xs uppercase bg-neutral-800/50">
                <tr>
                  <th className="px-4 py-3 text-left">Report Name</th>
                  <th className="px-4 py-3 text-left">Generated On</th>
                  <th className="px-4 py-3 text-left">Type</th>
                  <th className="px-4 py-3 text-left">Format</th>
                  <th className="px-4 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-700/30 text-[10px] sm:text-sm">
                <tr className="hover:bg-neutral-700/20">
                  <td className="px-4 py-3 ">Monthly Sales Report</td>
                  <td className="px-4 py-3">2024-02-01</td>
                  <td className="px-4 py-3">Sales</td>
                  <td className="px-4 py-3">PDF</td>
                  <td className="px-4 py-3 text-right">
                    <button className="text-blue-500 hover:text-blue-400">
                      Download
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-neutral-700/20">
                  <td className="px-4 py-3">Inventory Status Report</td>
                  <td className="px-4 py-3">2024-01-28</td>
                  <td className="px-4 py-3">Inventory</td>
                  <td className="px-4 py-3">Excel</td>
                  <td className="px-4 py-3 text-right">
                    <button className="text-blue-500 hover:text-blue-400">
                      Download
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-neutral-700/20">
                  <td className="px-4 py-3">Outstanding Credits Report</td>
                  <td className="px-4 py-3">2024-01-25</td>
                  <td className="px-4 py-3">Credit</td>
                  <td className="px-4 py-3">PDF</td>
                  <td className="px-4 py-3 text-right">
                    <button className="text-blue-500 hover:text-blue-400">
                      Download
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportsPage;
