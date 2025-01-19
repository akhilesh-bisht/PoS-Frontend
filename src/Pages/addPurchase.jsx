import React, { useState } from "react";
import products from "../components/Data";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/Slices/cartSlice";
import toast, { Toaster } from "react-hot-toast";

const ProductPage = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [discount, setDiscount] = useState(0);
  const handleToast = (name) => toast.success(`Add to cart ${name} `);

  const itemsPerPage = 10;

  const handleFilter = () => {
    let filtered = products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );

    if (category !== "All") {
      filtered = filtered.filter((product) => product.category === category);
    }
    return filtered;
  };
  const handleAddToCart = () => {
    if (!selectedProduct) return;

    const currentDate = new Date().toLocaleString();
    dispatch(
      addToCart({
        id: selectedProduct.id,
        name: selectedProduct.name,
        price: selectedProduct.price,
        unit: selectedProduct.unit,
        category: selectedProduct.category,
        qty: quantity,
        addedAt: currentDate,
      })
    );

    handleToast(selectedProduct.name);
    handleClose(); // Close the dropdown after adding to cart
  };

  // Calculate filtered products and pagination
  const filteredProducts = handleFilter();
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  const calculateTotal = () => {
    const price = Number(selectedProduct?.price) || 0;
    const total = price * quantity;
    const discountAmount = (total * discount) / 100;
    return total - discountAmount;
  };

  const handlePurchaseClick = (product) => {
    setSelectedProduct(product);
    setQuantity(1); // Reset quantity
    setDiscount(0); // Reset discount
  };

  const handleClose = () => {
    setSelectedProduct(null); // Close the dropdown
  };

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex justify-between ">
        <div className="flex flex-wrap gap-4 mb-4">
          <input
            type="text"
            placeholder="Search Product"
            className="border border-gray-300 p-2 rounded-lg"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            className="border border-gray-300 p-2 rounded-lg"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="Fertilizers">Fertilizers</option>
            <option value="Seeds">Seeds</option>
            <option value="Pesticides">Pesticides</option>
            <option value="Manure">Manure</option>
          </select>
        </div>
      </div>

      {/* Product Table */}
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200 text-xs sm:text-base">
            <th className="border border-gray-300 p-2">Product</th>
            <th className="border border-gray-300 p-2">Category</th>
            <th className="border border-gray-300 p-2">Stock</th>
            <th className="border border-gray-300 p-2">Price</th>
            <th className="border border-gray-300 p-2">Status</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedProducts.map((product) => (
            <tr
              key={product.id}
              className="hover:bg-gray-100 text-xs sm:text-base"
            >
              <td className="border border-gray-300 p-2">{product.name}</td>
              <td className="border border-gray-300 p-2">{product.category}</td>
              <td className="border border-gray-300 p-2">{product.stock}</td>
              <td className="text-center">
                ₹{product.price} {product.unit}
              </td>
              <td
                className={`border border-gray-300 p-2 ${
                  product.status === "Low Stock"
                    ? "text-red-500"
                    : "text-green-600"
                }`}
              >
                {product.status}
              </td>
              <td className="border border-gray-300 p-2">
                <button
                  className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                  onClick={() => handlePurchaseClick(product)}
                >
                  Purchase
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* No Products Found */}
      {filteredProducts.length === 0 && (
        <div className="text-center text-gray-500 mt-4">No products found.</div>
      )}

      {/* Pagination */}
      {/* <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      /> */}

      {/* Purchase Dropdown */}
      {selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-bold mb-2">Purchase Product</h2>
            <p className="text-gray-700">
              <strong>Product:</strong> {selectedProduct.name}
            </p>
            <p className="text-gray-700">
              <strong>Stock:</strong> {selectedProduct.stock}
            </p>
            <p className="text-gray-700">
              <strong>Price:</strong> {selectedProduct.price}
            </p>
            <div className="mt-4">
              <label className="block text-sm font-medium mb-1">
                Quantity:
              </label>
              <input
                type="number"
                min="1"
                max={selectedProduct.stock}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="border border-gray-300 p-2 rounded-lg w-full"
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium mb-1">
                Discount (%):
              </label>
              <input
                type="number"
                min="0"
                max="100"
                value={discount}
                onChange={(e) => setDiscount(Number(e.target.value))}
                className="border border-gray-300 p-2 rounded-lg w-full"
              />
            </div>
            <p className="text-gray-700 mt-4">
              <strong>Total Amount:</strong> ₹{calculateTotal()}
            </p>
            <div className="flex justify-end mt-4">
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2"
                onClick={handleClose}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToCart();
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
