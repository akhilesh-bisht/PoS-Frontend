import React, { useState } from "react";
import Card from "../DashComp/Card";
import Button from "../Button";
import InvoiceDetails from "./InvoivePurchase";
import ProductForm from "./ProductFrom";
import { useDispatch, useSelector } from "react-redux";
import {
  addInvoice,
  updateInvoice,
} from "../../redux/Slices/purchaseInvoiceSlice";
import { addProduct } from "../../redux/Slices/productsSlice";

const InventoryHeader = () => {
  const [isPurchasePopupOpen, setIsPurchasePopupOpen] = useState(false);
  const [isProductFormOpen, setIsProductFormOpen] = useState(false); // Track product form visibility
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInvoiceData({ ...invoiceData, [name]: value });
  };

  const togglePurchasePopup = () => {
    setIsPurchasePopupOpen(!isPurchasePopupOpen);
    if (!isPurchasePopupOpen) {
      setInvoiceData({
        purchaseDate: "",
        partyId: invoices.partyId || "",
        purchaseInvoice: invoices.purchaseInvoice || "",
      });
    }
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
    e.preventDefault();
    dispatch(addProduct(productData));
    setIsProductFormOpen(false);
    setProductData({
      name: "",
      category: "",
      stock: "",
      price: "",
      status: "",
    });
  };

  const data = [
    {
      title: "Total Products",
      value: products.length,
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
            className="pl-10 pr-4 py-1 border text-xs md:text-sm border-gray-300 rounded-lg"
          />
          <select className="px-2 py-1 md:py-2 border text-xs md:text-base rounded-lg">
            <option value="">All Categories</option>
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
        handleChange={handleChange}
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
    </div>
  );
};

export default InventoryHeader;
