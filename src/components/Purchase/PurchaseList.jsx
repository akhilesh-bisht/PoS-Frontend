import React from "react";
import Card from "../DashComp/Card";
import Table from "./Table";
const PurchaseList = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-2">
        <Card
          title="Total Purchases"
          value="₹4,85,000"
          description="45 orders"
          indicator="This Month"
          indicatorColor="blue"
        />
        <Card
          title="Pending Orders"
          value="12"
          description="₹85,000 value"
          indicator="Action Required"
          indicatorColor="orange"
        />
        <Card
          title="Average Order Value"
          value="₹10,780"
          description="vs ₹9,950 last month"
          indicator="+8%"
          indicatorColor="green"
        />
        <Card
          title="Payment Due"
          value="₹1,25,000"
          description="Next due in 5 days"
          indicator="5 pending"
          indicatorColor="red"
        />
      </div>
      <div className="mt-3">
        <Table />
      </div>
    </div>
  );
};

export default PurchaseList;
