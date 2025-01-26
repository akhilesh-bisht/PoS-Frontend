import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "../DashComp/Card";
import Button from "../Button";
import InvoiceDetails from "./InvoivePurchase";
import ProductForm from "./ProductFrom";
import InventoryTable from "./Table";
import { useDispatch, useSelector } from "react-redux";

// Import Redux actions
import {
  addInvoice,
  updateInvoice,
} from "../../redux/Slices/purchaseInvoiceSlice";
import { addProduct } from "../../redux/Slices/productsSlice";
import { setSearchTerm } from "../../redux/Slices/searchSlice";
import { setCategory } from "../../redux/Slices/categorySlice";

const InventoryHeader = () => {
  // State to handle visibility of popups for adding products and purchase details
  const [isPurchasePopupOpen, setIsPurchasePopupOpen] = useState(false);
  const [isProductFormOpen, setIsProductFormOpen] = useState(false);

  // State to hold invoice and product form data
  const [invoiceData, setInvoiceData] = useState({
    purchaseDate: "",
    partyId: "",
    purchaseInvoice: "",
  });
  const [productData, setProductData] = useState({
    name: "",
    category: "",
    stock: 0,
    price: 0,
    status: "",
  });

  // Redux dispatch and selectors
  const dispatch = useDispatch();
  const { partyId, purchaseInvoice } = useSelector(
    (state) => state.purchaseInvoices
  );
  const products = useSelector((state) => state.products);
  const searchTerm = useSelector((state) => state.search.searchTerm);
  const selectedCategory = useSelector(
    (state) => state.category.selectedCategory
  );

  // Handlers for search and category filter
  const handleSearch = (e) => dispatch(setSearchTerm(e.target.value));
  const handleCategoryChange = (e) => dispatch(setCategory(e.target.value));

  // Toggle purchase popup visibility
  const togglePurchasePopup = () => {
    // Reset invoice data when opening the popup
    if (!isPurchasePopupOpen) {
      setInvoiceData({
        purchaseDate: "",
        partyId: partyId || "",
        purchaseInvoice: purchaseInvoice || "",
      });
    }
    setIsPurchasePopupOpen(!isPurchasePopupOpen);
  };

  // Handle invoice submission
  const handlePurchaseSubmit = (e) => {
    e.preventDefault();
    if (invoiceData.partyId === partyId) {
      dispatch(updateInvoice(invoiceData)); // Update existing invoice
    } else {
      dispatch(addInvoice(invoiceData)); // Add new invoice
    }
    togglePurchasePopup(); // Close popup after submission
    setIsProductFormOpen(true); // Open product form
  };

  // Handle product submission
  const handleProductSubmit = () => {
    const productWithId = { ...productData, id: uuidv4() }; // Add unique id to product
    dispatch(addProduct(productWithId)); // Add product to Redux store
    setIsProductFormOpen(false); // Close product form
    setProductData({
      name: "",
      category: "",
      stock: 0,
      price: 0,
      status: "",
    }); // Reset product form
  };

  // Count low and out-of-stock products using reduce for performance optimization
  const { lowStockCount, outOfStockCount } = products.reduce(
    (counts, product) => {
      const stockAmount = parseInt(product.stock);
      if (stockAmount < 20 && stockAmount > 0) counts.lowStockCount++;
      if (stockAmount === 0) counts.outOfStockCount++;
      return counts;
    },
    { lowStockCount: 0, outOfStockCount: 0 }
  );

  // Data for the cards displaying inventory statistics
  const data = [
    {
      title: "Total Products",
      value: products.length,
      indicator: "Active",
      indicatorColor: "green",
    },
    {
      title: "Low Stock Items",
      value: lowStockCount,
      indicator: "Alert",
      indicatorColor: "red",
    },
    {
      title: "Out of Stock",
      value: outOfStockCount,
      indicator: "Critical",
      indicatorColor: "red",
    },
  ];

  return (
    <div className="relative">
      {/* Inventory header and actions */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mt-2">
        <div className="flex items-center gap-1 w-full md:gap-4">
          <h2 className="w-64 md:text-2xl sm:w-72 font-semibold">
            Inventory Management
          </h2>
          {/* Add product button */}
          <Button
            label="Add Product"
            icon={
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            }
            onClick={togglePurchasePopup}
            styles="bg-blue-500 hover:bg-blue-600 w-[7rem] sm:w-[7rem] md:w-32"
          />
        </div>
        {/* Search and category filter inputs */}
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
      </div>

      {/* Stats display cards */}
      <section className="pt-2">
        <div className="grid grid-cols-2 md:w-full lg:grid-cols-3 gap-4">
          {data.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </section>

      {/* Purchase invoice form popup */}
      <InvoiceDetails
        isOpen={isPurchasePopupOpen}
        invoiceData={invoiceData}
        handleChange={(e) =>
          setInvoiceData({ ...invoiceData, [e.target.name]: e.target.value })
        }
        handlePurchaseSubmit={handlePurchaseSubmit}
        togglePurchasePopup={togglePurchasePopup}
      />

      {/* Product form popup */}
      {isProductFormOpen && (
        <ProductForm
          productData={productData}
          setProductData={setProductData}
          handleSubmit={handleProductSubmit}
          setIsProductFormOpen={setIsProductFormOpen}
        />
      )}

      {/* Inventory table */}
      <div className="mt-10">
        <InventoryTable />
      </div>
    </div>
  );
};

export default InventoryHeader;
