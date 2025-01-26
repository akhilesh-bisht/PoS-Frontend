import React, { useState, useEffect } from "react";
import { GoBell } from "react-icons/go";
import Cart from "../components/Cart";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);

  // Check if the app is installed or in standalone mode
  const checkIfStandalone = () => {
    if (
      window.matchMedia("(display-mode: standalone)").matches ||
      window.navigator.standalone === true
    ) {
      setIsInstalled(true); // App is installed and running in standalone mode
    }
  };

  useEffect(() => {
    // Check if the app is installed or in standalone mode on initial load
    checkIfStandalone();

    // Listen for beforeinstallprompt event to handle installation prompt
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    // Listen for appinstalled event to handle app installation
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", () => {
      setIsInstalled(true); // App installed successfully, hide install button
      localStorage.setItem("isAppInstalled", "true"); // Persist the installation status
    });

    // Check if the app was already installed by the user
    if (localStorage.getItem("isAppInstalled") === "true") {
      setIsInstalled(true);
    }

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        console.log("PWA successfully installed!");
        setIsInstalled(true); // Set installed status to true after installation
        localStorage.setItem("isAppInstalled", "true"); // Persist the installation status
      } else {
        console.log("User dismissed the install prompt");
      }
      setDeferredPrompt(null); // Reset the deferred prompt after install
    }
  };

  return (
    <main className="flex ml-8 lg:ml-64 overflow-y-auto bg-gray-100">
      <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 top-0 z-10 w-[90%] lg:w-[75%] xl:w-[80%] fixed">
        {/* Search Bar */}
        <div className="flex-1 px-4">
          {/* <input
            type="search"
            placeholder="Search..."
            className="w-[75%] max-w-md px-4 text-xs md:text-base py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          /> */}
          <div className="flex flex-col  w-20 sm:flex-row sm:gap-4 sm:mt-4 sm:w-full">
            {/* Add Stock Button */}
            <Link to="/Inventory">
              <button className="bg-green-500 text-white text-[8px] md:text-base px-4 py-1 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition">
                Add Stock
              </button>
            </Link>

            {/* Create Invoice Button */}
            <Link to="/sales/saleItem">
              <button className="bg-blue-500 text-white px-3 py-1 text-[7px] md:text-base rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition">
                Create Invoice
              </button>
            </Link>
          </div>
        </div>

        <div className="mr-4 flex justify-center mt-2 bg-white ">
          <Cart />
        </div>
        {/* Install Button - Only show if the app is not installed */}
        {!isInstalled && (
          <div className="flex items-center justify-center mr-4">
            <button
              onClick={handleInstall}
              className="relative px-3 py-1 sm:px-4 sm:py-2 w-[75px]  sm:w-full font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full shadow-lg overflow-hidden group hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <span className="absolute inset-0  h-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out blur-lg"></span>
              <span className="relative text-[10px] sm:text-sm">
                Install App
              </span>
            </button>
          </div>
        )}

        {/* Notification Icon */}
        <GoBell className="text-gray-600 hover:text-gray-900 text-xl cursor-pointer hover:shadow-lg transition-shadow duration-200" />
      </header>
    </main>
  );
};

export default Navbar;
