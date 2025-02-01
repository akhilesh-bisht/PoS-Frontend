import React, { Suspense, lazy, memo, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./redux/Slices/productsSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Lazy load components
const Sidebar = lazy(() => import("./components/Sidebar"));
const Navbar = lazy(() => import("./components/Navbar"));
const Dashboard = lazy(() => import("./Pages/DashBoard"));
const InventoryPage = lazy(() => import("./Pages/InventoryPage"));
const SalesPage = lazy(() => import("./Pages/SalesPage"));
const PurchasePage = lazy(() => import("./Pages/PurchasePage"));
const CreditPage = lazy(() => import("./Pages/CreditPage"));
const ProfileSettings = lazy(() => import("./Pages/Profile"));
const SaleItem = lazy(() => import("./Pages/SaleItem"));
const BillsAccordion = lazy(() => import("./components/Bills"));
const PaymentPage = lazy(() => import("./Pages/PaymentPage"));

const MemoizedSidebar = memo(Sidebar);
const MemoizedNavbar = memo(Navbar);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Router>
      <div className="app-container flex h-screen">
        <ToastContainer position="bottom-right" autoClose={3000} />
        <Suspense
          fallback={
            <div className="flex justify-center items-center w-full h-screen">
              <FontAwesomeIcon
                icon={faSpinner}
                spin
                size="3x"
                color="#4fa94d"
              />
            </div>
          }
        >
          <MemoizedSidebar />
          <div className="content-container flex flex-col flex-grow w-full">
            <MemoizedNavbar />
            <div className="overflow-auto p-4 h-screen w-full mt-16 lg:ml-64 lg:w-auto">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/Inventory" element={<InventoryPage />} />
                <Route path="/sales" element={<SalesPage />} />
                <Route path="/purchase" element={<PurchasePage />} />
                <Route path="/credit" element={<CreditPage />} />
                <Route path="/profile" element={<ProfileSettings />} />
                <Route path="/sales/saleItem" element={<SaleItem />} />
                <Route path="purchase/bills" element={<BillsAccordion />} />
                <Route path="/payment" element={<PaymentPage />} />
              </Routes>
            </div>
          </div>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
