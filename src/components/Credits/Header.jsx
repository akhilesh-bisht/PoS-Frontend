import React from "react";

const Header = () => (
  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
    <div className="flex items-center md:gap-4">
      <h2 className=" md:text-2xl  font-semibold w-full">Credits Management</h2>
      <button className="bg-blue-600 text-white text-xs px-2 w-36 md:w-44 lg:w-60 py-1 rounded-lg flex items-center gap-1 hover:bg-blue-700 transition-colors focus:outline-none">
        <svg
          className=" w-3 h-3 md:w-5 md:h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        New credit
      </button>
    </div>

    <div className="flex flex-wrap gap-3">
      <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-xs sm:text-base">
        <option>All Credits</option>
        <option>Due Today</option>
        <option>Overdue</option>
        <option>Upcoming</option>
      </select>
      <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2 text-xs sm:text-base">
        <svg
          className=" w-3 h-3 sm:w-5 sm:h-5"
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
        Export Report
      </button>
    </div>
  </div>
);

export default Header;
