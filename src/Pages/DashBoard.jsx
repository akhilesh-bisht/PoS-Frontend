import React from "react";
import Card from "../components/DashComp/Card";
import SalesAnalysis from "../components/DashComp/SalesAnalysis";

const Dashboard = () => {
  const cardsData = [
    {
      title: "Today's Sales",
      value: "₹24,500",
      description: "Up from yesterday",
      indicator: "+12.5%",
      indicatorColor: "green",
      icon: (
        <svg
          className="w-4 h-4 mr-1 text-green-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
    },
    {
      title: "Pending Credits",
      value: "₹1,20,000",
      description: "12 total pending",
      indicator: "4 Due Today",
      indicatorColor: "red",
      icon: (
        <svg
          className="w-4 h-4 mr-1 text-red-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Low Stock Items",
      value: "8 Items",
      description: "Reorder required",
      indicator: "Alert",
      indicatorColor: "orange",
      icon: (
        <svg
          className="w-4 h-4 mr-1 text-orange-500"
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
      ),
    },
    {
      title: "Expiring Stock",
      value: "5 Items",
      description: "Within 30 days",
      indicator: "Warning",
      indicatorColor: "yellow",
      icon: (
        <svg
          className="w-4 h-4 mr-1 text-yellow-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <>
      <section className="p-2">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {cardsData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </section>
      <SalesAnalysis />
    </>
  );
};

export default Dashboard;
