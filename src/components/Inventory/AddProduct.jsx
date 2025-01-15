import React, { useState } from "react";
import Card from "../DashComp/Card";
const InventoryHeader = ({ onAddProduct }) => {
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  const toggleSlider = () => {
    setIsSliderOpen(!isSliderOpen);
  };
  const data = [
    {
      title: "Total Products",
      value: "486",
      indicator: "Active",
      indicatorColor: "green",
    },

    {
      title: "Low Stock Items",
      value: "12",
      indicator: "Alert",
      indicatorColor: "red",
    },
    {
      title: "Out of Stock",
      value: "8",
      indicator: "Critical",
      indicatorColor: "red",
    },
  ];

  return (
    <div className="relative">
      {/* Inventory Header */}
      <div className="flex flex-col md:flex-row  md:items-center md:justify-between gap-5 mt-2">
        <div className="flex items-center gap-1 w-full md:gap-4">
          <h2 className=" w-64 md:text-2xl  font-semibold">
            Inventory Management
          </h2>
          <button
            onClick={toggleSlider}
            className="bg-blue-600 w-40 md:w-44 lg:w-40  xl:w-40 text-white text-xs px-1.5 py-1 rounded-lg flex items-center gap-1 hover:bg-blue-700 transition-colors focus:outline-none ml-2"
          >
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
            Add Product
          </button>
        </div>
        <div className="flex flex-wrap gap-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="pl-10 pr-4 py-1 border    text-xs   md:text-sm border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              aria-label="Search Products"
            />
            <svg
              className=" w-3 h-3 md:w-5 md:h-5 absolute left-3 top-2 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <select
            className="px-2 py-1 md:py-2 border border-gray-300  text-xs md:text-base rounded-lg focus:outline-none focus:border-blue-500"
            aria-label="Category Filter"
          >
            <option value="">All Categories</option>
            <option value="fertilizers">Fertilizers</option>
            <option value="seeds">Seeds</option>
            <option value="machinery">Machinery</option>
            <option value="pesticides">Pesticides</option>
          </select>
        </div>
      </div>

      <section className="pt-2">
        <div className="grid grid-cols-2 md:w-full lg:grid-cols-3 gap-4">
          {data.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </section>

      {/* Slider */}
      {isSliderOpen && (
        <>
          {/* Backdrop */}
          <div
            onClick={toggleSlider}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
          ></div>
          <div className="fixed top-0 right-0 w-full md:w-1/3 h-full bg-white shadow-lg z-50 transition-transform transform translate-x-0">
            <div className="p-6">
              <h3 className=" text-base md:text-lg font-medium mb-4">
                Add Product
              </h3>
              <form className="space-y-4 text-sm">
                <input
                  type="text"
                  placeholder="Product Name"
                  className="w-full border p-2 rounded text-sm"
                />
                <input
                  type="text"
                  placeholder="Category"
                  className="w-full border p-2 rounded"
                />
                <input
                  type="text"
                  placeholder="Stock"
                  className="w-full border p-2 rounded"
                />
                <input
                  type="text"
                  placeholder="Price"
                  className="w-full border p-2 rounded"
                />
                <input
                  type="text"
                  placeholder="Status"
                  className="w-full border p-2 rounded"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition text-sm"
                  onClick={onAddProduct}
                >
                  Add Product
                </button>
                <button
                  type="button"
                  onClick={toggleSlider}
                  className="bg-gray-600 text-white px-3 py-1 rounded hover:bg-gray-700 transition text-sm ml-1"
                >
                  Close
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default InventoryHeader;
