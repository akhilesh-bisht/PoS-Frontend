import React from "react";

const Button = ({
  label = "Button", // Default label text
  icon = null, // Icon (optional)
  onClick, // Function to handle click events
  styles = "", // Additional CSS classes
}) => {
  return (
    <button
      onClick={onClick}
      className={` w-48 sm:w-40 md:w-28 xl:w-28 text-white text-xs px-1.5 py-1 rounded-lg flex items-center gap-1  transition-colors focus:outline-none ml-2 ${styles}`}
    >
      {icon && (
        <svg
          className="w-3 h-3 md:w-5 md:h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {icon}
        </svg>
      )}
      {label}
    </button>
  );
};

export default Button;
