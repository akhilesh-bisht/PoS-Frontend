import { useState } from "react";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const routes = [
    {
      path: "/",
      name: "Dashboard",
      icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001-1m-6 0h6",
    },
    {
      path: "/inventory",
      name: "Inventory",
      icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
    },
    {
      path: "/sales",
      name: "Sales",
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    },
    {
      path: "/purchase",
      name: "Purchases",
      icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
    },
    {
      path: "/credit",
      name: "Credits",
      icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
    },
    {
      path: "/profile",
      name: "Profile",
      icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
    },
  ];

  return (
    <>
      <button
        className="fixed top-4 left-4 z-50 lg:hidden bg-white p-2 rounded-md"
        onClick={toggleSidebar}
      >
        <svg
          className=" w-4 h-4 md:w-6 md:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      <div
        className={`flex bg-gray-200 min-h-screen ${
          isOpen ? "ml-64" : "ml-0"
        } transition-all duration-300`}
      >
        <nav
          className={`w-64 bg-white min-h-screen flex-shrink-0 fixed left-0 transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0`}
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-center h-16 border-b border-gray-200">
              <span className=" text-base md:text-xl font-semibold">
                FarmStock
              </span>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 overflow-y-auto py-4">
              <div className="space-y-1 px-2">
                {routes.map((route) => (
                  <NavLink
                    key={route.path}
                    to={route.path}
                    className={({ isActive }) =>
                      `flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors ${
                        isActive ? "bg-gray-200" : ""
                      }`
                    }
                    onClick={() => {
                      if (isOpen) {
                        toggleSidebar();
                      }
                    }}
                  >
                    <svg
                      className="w-5 h-5 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={route.icon}
                      />
                    </svg>
                    {route.name}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="border-t h-screen  hidden lg:block flex-1  border-gray-200 p-4">
              <div className="flex items-center mb-8">
                <img
                  src="/placeholder.svg?height=32&width=32"
                  alt="User"
                  className=" w-4 h-4 md:w-8 md:h-8 rounded-full"
                />
                <div className="ml-3">
                  <NavLink to="/profile">
                    <p className="text-sm font-medium text-gray-700">
                      Admin User
                    </p>
                    <p className="text-xs text-gray-500">admin@farmstock.com</p>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
