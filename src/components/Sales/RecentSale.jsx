import React from "react";
import SalesTable from "./SalesTable";
import Pagination from "./Pagination";

const RecentSales = () => {
  return (
    <section className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold">Recent Sales</h3>
      </div>
      <SalesTable />
      <div className="bg-white px-4 py-3 border-t border-gray-200 sm:px-6">
        <Pagination totalResults={30} currentPage={1} resultsPerPage={10} />
      </div>
    </section>
  );
};

export default RecentSales;
