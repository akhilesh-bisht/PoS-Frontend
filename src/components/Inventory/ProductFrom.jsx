import React, { useCallback, useMemo, useState } from "react";
import PropTypes from "prop-types";

// The ProductForm component for adding/editing product details.
const ProductForm = ({
  productData, // Current product data state
  setProductData, // Function to update product data
  handleSubmit, // Function to handle form submission
  setIsProductFormOpen, // Function to toggle form visibility
}) => {
  // Local state for error messages
  const [error, setError] = useState("");

  // Handle input changes and update productData state
  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setProductData((prevProductData) => ({
        ...prevProductData,
        [name]: name === "stock" ? parseInt(value, 10) : value, // Parse stock as a number
      }));
    },
    [setProductData]
  );
  // Handle form submission
  const handleSubmitProduct = useCallback(
    (e) => {
      e.preventDefault();

      // Validate stock and price to ensure they are not negative
      if (productData.stock < 0 || productData.price < 0) {
        setError("Stock and Price cannot be negative!");
        return;
      }

      // Clear error state if validation passes
      setError("");

      // Create a new product object with a calculated status
      const newProduct = {
        ...productData,
        status: productData.stock < 20 ? "Low Stock" : "In Stock",
      };

      // Call the parent's handleSubmit function with the new product
      handleSubmit(newProduct);

      // Close the form after submission
      closeForm();
    },
    [productData, handleSubmit]
  );

  // Close the form and reset product data to its initial state
  const closeForm = useCallback(() => {
    setIsProductFormOpen(false);
    setProductData({
      name: "",
      category: "All",
      stock: 0,
      price: 0,
    });
  }, [setIsProductFormOpen, setProductData]);

  // Calculate the product's status dynamically based on stock
  const status = useMemo(() => {
    if (productData.stock === 0 || isNaN(productData.stock)) return "Unknown";
    return productData.stock < 20 ? "Low Stock" : "In Stock";
  }, [productData.stock]);

  return (
    // Overlay container for the form
    <div className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 opacity-100">
      {/* Form container */}
      <div className="fixed top-0 right-0 w-full md:w-1/3 h-full bg-white shadow-lg z-50 transition-transform duration-300 translate-x-0">
        <div className="p-6">
          {/* Header with title and close button */}
          <div className="flex justify-between items-center">
            <h3 className="text-base ml-8 md:m-0 md:text-lg font-medium mb-4">
              Product Details
            </h3>
            <button
              onClick={closeForm}
              className="cursor-pointer text-xl hover:text-red-500"
            >
              X
            </button>
          </div>

          {/* Form for product details */}
          <form
            onSubmit={handleSubmitProduct}
            className="space-y-4 text-sm mt-2"
          >
            {/* Input for product name */}
            <label htmlFor="name" className="block text-gray-700">
              Product Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={productData.name}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
              aria-label="Product Name"
            />

            {/* Dropdown for product category */}
            <label htmlFor="category" className="block text-gray-700">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={productData.category}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
              aria-label="Product Category"
            >
              <option value="All">All Categories</option>
              <option value="Fertilizers">Fertilizers</option>
              <option value="Seeds">Seeds</option>
              <option value="Pesticides">Pesticides</option>
              <option value="Manure">Manure</option>
            </select>

            {/* Input for stock quantity */}
            <label htmlFor="stock" className="block text-gray-700">
              Stock Quantity
            </label>
            <input
              type="number"
              id="stock"
              name="stock"
              value={productData.stock}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
              aria-label="Stock Quantity"
            />

            {/* Input for product price */}
            <label htmlFor="price" className="block text-gray-700">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={productData.price}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
              aria-label="Product Price"
            />

            {/* Read-only input for status */}
            <label htmlFor="status" className="block text-gray-700">
              Status
            </label>
            <input
              type="text"
              id="status"
              name="status"
              value={status}
              className="w-full border p-2 rounded bg-gray-200"
              readOnly
            />

            {/* Error message */}
            {error && <p className="text-red-500">{error}</p>}

            {/* Submit button */}
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              Add Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// Prop type validation for ProductForm
ProductForm.propTypes = {
  productData: PropTypes.shape({
    name: PropTypes.string.isRequired, // Product name must be a string
    category: PropTypes.string.isRequired, // Product category must be a string
    stock: PropTypes.number.isRequired, // Stock must be a number
    price: PropTypes.number.isRequired, // Price must be a number
  }).isRequired,
  setProductData: PropTypes.func.isRequired, // Must be a function to update product data
  handleSubmit: PropTypes.func.isRequired, // Must be a function for form submission
  setIsProductFormOpen: PropTypes.func.isRequired, // Must be a function to toggle form visibility
};

export default ProductForm;
