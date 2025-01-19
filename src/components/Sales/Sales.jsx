import React from "react";
import Card from "../DashComp/Card";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
const SalesManagement = () => {
  const navigate = useNavigate();
  const gotoPurchase = () => {
    navigate("/sales/purchaseProduct");
  };
  return (
    <section id="sales" className="p-2 space-y-6">
      {/* Sales Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center md:gap-4">
          <h2 className=" md:text-2xl  font-semibold w-full">
            Sales Management
          </h2>
          <Button
            label="New Sale"
            icon={
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            }
            styles="bg-blue-500 hover:bg-blue-600 w-28 md:w-40 xl:w-40"
          />

          <Button
            label="Purchase"
            icon={
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            }
            onClick={gotoPurchase}
            styles="bg-green-500 hover:bg-green-600"
          />
        </div>

        <div className="flex flex-wrap gap-3">
          <div className="relative">
            <input
              type="date"
              className=" text-xs lg:text-sm px-2 lg:px-4 py-1 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <select className=" text-xs lg:text-sm px-2 lg:px-4 py-1 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="custom">Custom Range</option>
          </select>
        </div>
      </div>

      {/* Sales Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          {
            title: "Today Sales",
            value: "₹24,500",
            description: "12 orders",
            indicator: "+15%",
            indicatorColor: "green",
          },
          {
            title: "Weekly Sales",
            value: "₹1,68,000",
            description: "85 orders",
            indicator: "+8%",
            indicatorColor: "green",
          },
          {
            title: "Monthly Sales",
            value: "₹6,24,000",
            description: "320 orders",
            indicator: "+12%",
            indicatorColor: "green",
          },
          {
            title: "Pending Payment",
            value: "₹85,000",
            description: "8 inVoices",
            indicator: "4 due",
            indicatorColor: "red",
          },
        ].map((stat, index) => (
          <Card
            key={index}
            title={stat.title}
            value={stat.value}
            description={stat.description}
            icon={null} // Add an icon if needed
            indicator={stat.indicator}
            indicatorColor={stat.indicatorColor}
          />
        ))}
      </div>

      {/* Sales Chart */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <div className="flex justify-between items-center mb-6">
          <h3 className=" text-sm lg:text-lg font-semibold">Sales Trend</h3>
          <div className="flex gap-1 sm:gap-3">
            {["Daily", "Weekly", "Monthly"].map((button, index) => (
              <button
                key={index}
                className=" px-2 md:px-3 py-1 text-[8px] sm:text-xs lg:text-sm border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                {button}
              </button>
            ))}
          </div>
        </div>
        <div className="h-64 bg-gray-50 rounded border border-gray-200 flex items-center justify-center">
          <span className="text-gray-500">Sales Chart Placeholder</span>
        </div>
      </div>

      {/* Recent Sales */}
      {/* (Keep this section as is) */}
    </section>
  );
};

export default SalesManagement;
