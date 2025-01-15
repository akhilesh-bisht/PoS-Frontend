import React from "react";
import PurchaseList from "../components/Purchase/PurchaseList";
import Pagination from "../components/Sales/Pagination";
function PurchasePage() {
  return (
    <>
      <PurchaseList />
      <div className=" mr-4 mt-4">
        <Pagination totalResults={30} currentPage={1} resultsPerPage={10} />
      </div>
    </>
  );
}

export default PurchasePage;
