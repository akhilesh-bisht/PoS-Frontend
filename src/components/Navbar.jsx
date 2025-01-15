import React from "react";
import { GoBell } from "react-icons/go";

const Navbar = () => {
  return (
    <main className="flex ml-8 lg:ml-64 overflow-y-auto bg-gray-100">
      {/* Header */}
      <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 top-0 z-10 w-full fixed">
        {/*        
        <div className="flex items-center justify-center h-16 border-b lg:hidden border-gray-200">
          <span className="text-xl font-semibold">FarmStock</span>
        </div> */}
        {/* Search Bar */}
        <div className="flex-1 px-4">
          <input
            type="search"
            placeholder="Search..."
            className="w-[75%] max-w-md px-4  text-xs md:text-base  py-1 lg:py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>

        <GoBell className="p-2 text-gray-600 hover:text-gray-900" />
      </header>
    </main>
  );
};

export default Navbar;
