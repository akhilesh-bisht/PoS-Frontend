import React from "react";
import Button from "../Button";

// Memoized Header component to prevent unnecessary re-renders
const Header = React.memo(() => (
  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
    <div className="flex items-center md:gap-4">
      <h2 className="md:text-2xl font-semibold w-full">Credits Management</h2>
      <Button
        label="New Credit"
        icon={
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        }
        styles="bg-blue-500 hover:bg-blue-600 w-28 md:w-36 xl:w-36"
      />
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
          className="w-3 h-3 sm:w-5 sm:h-5"
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
));

export default Header;
