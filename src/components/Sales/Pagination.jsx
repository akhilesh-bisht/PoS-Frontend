import React from "react";

const Pagination = ({ totalResults, currentPage, resultsPerPage }) => {
  const totalPages = Math.ceil(totalResults / resultsPerPage);

  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="hidden  sm:block sm:text-sm text-gray-700">
          Showing{" "}
          <span className="font-medium ">
            {(currentPage - 1) * resultsPerPage + 1}
          </span>{" "}
          to{" "}
          <span className="font-medium">
            {Math.min(currentPage * resultsPerPage, totalResults)}
          </span>{" "}
          of <span className="font-medium">{totalResults}</span> results
        </p>
      </div>
      <nav
        className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px "
        aria-label="Pagination"
      >
        <button
          className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-xs sm:text-sm font-medium text-gray-500 hover:bg-gray-50"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium ${
              currentPage === i + 1
                ? "bg-red-400 rounded-md"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-xs sm:text-sm font-medium text-gray-500 hover:bg-gray-50"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </nav>
    </div>
  );
};

export default Pagination;
