import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./Pages/LoginPage";
// import Signup from "./Pages/SignupPage";
import Dashboard from "./Pages/DashBoard";
import Sidebar from "./Components/Sidebar";
import Navbar from "../src/components/Navbar";
import InventoryPage from "./Pages/InventoryPage";
import SalesPage from "./Pages/SalesPage";
import PurchasePage from "./Pages/PurchasePage";
import CreditPage from "./Pages/CreditPage";
import ProfileSettings from "./Pages/Profile";
import ProductPage from "./Pages/AddPurchase";
import BillsAccordion from "./components/Bills";
import PaymentPage from "./Pages/PaymentPage";

function App() {
  return (
    <Router>
      <div className="app-container flex h-screen ">
        <Sidebar />
        <div className="content-container flex flex-col flex-grow w-full">
          <Navbar />

          <div className="overflow-auto p-4 h-screen w-full mt-16  lg:ml-64 lg:w-auto">
            <Routes>
              {/* <Route path="/login" element={<Login />} /> */}
              {/* <Route path="/signup" element={<Signup />} /> */}
              <Route path="/" element={<Dashboard />} />
              <Route path="/Inventory" element={<InventoryPage />} />

              <Route path="/sales" element={<SalesPage />} />
              <Route path="/purchase" element={<PurchasePage />} />
              <Route path="/credit" element={<CreditPage />} />
              <Route path="/profile" element={<ProfileSettings />} />
              <Route path="/sales/purchaseProduct" element={<ProductPage />} />
              <Route path="purchase/bills" element={<BillsAccordion />} />
              <Route path="/payment" element={<PaymentPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
