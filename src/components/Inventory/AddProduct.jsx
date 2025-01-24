import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "../DashComp/Card";
import Button from "../Button";
import InvoiceDetails from "./InvoivePurchase";
import ProductForm from "./ProductFrom";
import InventoryTable from "./Table";
import { useDispatch, useSelector } from "react-redux";

import {
  addInvoice,
  updateInvoice,
} from "../../redux/Slices/purchaseInvoiceSlice";
import { addProduct } from "../../redux/Slices/productsSlice";
import { setSearchTerm } from "../../redux/Slices/searchSlice";
import { setCategory } from "../../redux/Slices/categorySlice";

const InventoryHeader = () => {
  const [isPurchasePopupOpen, setIsPurchasePopupOpen] = useState(false);
  const [isProductFormOpen, setIsProductFormOpen] = useState(false);

  const [invoiceData, setInvoiceData] = useState({
    purchaseDate: "",
    partyId: "",
    purchaseInvoice: "",
  });
  const [productData, setProductData] = useState({
    name: "",
    category: "",
    stock: "",
    price: "",
    status: "",
  });

  const dispatch = useDispatch();
  const invoices = useSelector((state) => state.purchaseInvoices);
  const products = useSelector((state) => state.products);

  const searchTerm = useSelector((state) => state.search.searchTerm);
  const selectedCategory = useSelector(
    (state) => state.category.selectedCategory
  );

  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  const handleCategoryChange = (e) => {
    dispatch(setCategory(e.target.value));
  };

  const togglePurchasePopup = () => {
    if (!isPurchasePopupOpen) {
      setInvoiceData({
        purchaseDate: "",
        partyId: invoices.partyId || "",
        purchaseInvoice: invoices.purchaseInvoice || "",
      });
    }
    setIsPurchasePopupOpen(!isPurchasePopupOpen);
  };

  const handlePurchaseSubmit = (e) => {
    e.preventDefault();
    if (invoiceData.partyId === invoices.partyId) {
      dispatch(updateInvoice(invoiceData));
    } else {
      dispatch(addInvoice(invoiceData));
    }
    togglePurchasePopup();
    setIsProductFormOpen(true);
  };

  const handleProductSubmit = (e) => {
    const productWithId = { ...productData, id: uuidv4() }; // Add unique id using uuidv4
    dispatch(addProduct(productWithId));
    setIsProductFormOpen(false);
    setProductData({
      name: "",
      category: "",
      stock: "",
      price: "",
      status: "",
    });
  };

  const lowStockCount = products.filter((product) => {
    const stockAmount = parseInt(product.stock);
    return stockAmount < 20;
  }).length;

  const outOfStockCount = products.filter((product) => {
    const stockAmount = parseInt(product.stock);
    return stockAmount == 0;
  }).length;

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
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mt-2">
        <div className="flex items-center gap-1 w-full md:gap-4">
          <h2 className="w-64 md:text-2xl sm:w-72 font-semibold">
            Inventory Management
          </h2>
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
            styles="bg-blue-500 hover:bg-blue-600"
          />
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
            className="px-2 py-1 md:py-2 border text-xs md:text-base rounded-lg
          "
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

      <section className="pt-2">
        <div className="grid grid-cols-2 md:w-full lg:grid-cols-3 gap-4">
          {data.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </section>

      <InvoiceDetails
        isOpen={isPurchasePopupOpen}
        invoiceData={invoiceData}
        handleChange={(e) =>
          setInvoiceData({ ...invoiceData, [e.target.name]: e.target.value })
        }
        handlePurchaseSubmit={handlePurchaseSubmit}
        togglePurchasePopup={togglePurchasePopup}
      />

      {isProductFormOpen && (
        <ProductForm
          productData={productData}
          setProductData={setProductData}
          handleSubmit={handleProductSubmit}
          setIsProductFormOpen={setIsProductFormOpen}
        />
      )}
      <div className="mt-10">
        <InventoryTable />
      </div>
    </div>
  );
};

export default InventoryHeader;
