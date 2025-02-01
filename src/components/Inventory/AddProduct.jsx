import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/Slices/productsSlice";
import ProductForm from "./ProductFrom";
import InventoryTable from "./Table";
import Card from "../DashComp/Card";
import { setSearchTerm } from "../../redux/Slices/searchSlice";
import { setCategory } from "../../redux/Slices/categorySlice";

const InventoryHeader = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [productData, setProductData] = useState({
    product_name: "",
    category: "All",
    package: "",
    hsn_code: "",
    gst_rate: 5,
    quantity: 0,
    min_quantity: 0,
    batch_no: "",
    exp_date: "",
    purchase_date: "",
    party_id: "",
    purchase_invoice: "",
    rate: 0,
  });

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const searchTerm = useSelector((state) => state.search.searchTerm);
  const selectedCategory = useSelector(
    (state) => state.category.selectedCategory
  );
  const status = useSelector((state) => state.products.status); // Track loading state
  const error = useSelector((state) => state.products.error); // Track error state

  // Handlers for search and category filter
  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };
  const handleCategoryChange = (e) => dispatch(setCategory(e.target.value));

  const stats = [
    {
      title: "Total Products",
      value: products.items.length,
      indicator: "Active",
      indicatorColor: "green",
    },
    {
      title: "Low Stock",
      value: products.items.filter((p) => p.status === "Low Stock").length,
      indicator: "Alert",
      indicatorColor: "red",
    },
    {
      title: "Out of Stock",
      value: products.items.filter((p) => p.status === "Out of Stock").length,
      indicator: "Critical",
      indicatorColor: "red",
    },
  ];

  return (
    <div className="p-1 md:p-3">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h1 className="text-2xl font-bold mb-4 md:mb-0">
          Inventory Management
        </h1>
        <button
          onClick={() => setIsFormOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add New Product
        </button>
      </div>

      <div className="flex flex-wrap gap-3">
        <input
          type="text"
          placeholder="Search products..."
          aria-label="Search Products"
          value={searchTerm}
          onChange={handleSearch}
          className="pl-10 pr-4 py-1 border text-xs md:text-sm border-gray-300 rounded-lg"
        />
        <select
          className="px-2 py-1 md:py-2 border text-xs md:text-base rounded-lg"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="All">All Categories</option>
          <option value="Fertilizers">Fertilizers</option>
          <option value="Seeds">Seeds</option>
          <option value="Machinery">Machinery</option>
          <option value="Pesticides">Pesticides</option>
        </select>
      </div>

      {/* Display Loader or Error */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {status === "loading" ? (
          <div className="flex justify-center items-center w-full col-span-3">
            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : error ? (
          <div className="text-red-500 font-semibold col-span-3">
            ❌ Failed to fetch data. Please try again later.
          </div>
        ) : (
          stats.map((stat, index) => <Card key={index} {...stat} />)
        )}
      </div>

      {isFormOpen && (
        <ProductForm
          productData={productData}
          setProductData={setProductData}
          handleSubmit={(product) => dispatch(addProduct(product))}
          onClose={() => setIsFormOpen(false)}
        />
      )}

      <InventoryTable />
    </div>
  );
};

export default InventoryHeader;
