import React, { useMemo, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct, editProduct } from "../../redux/Slices/productsSlice";

// Main InventoryTable component
const InventoryTable = () => {
  const dispatch = useDispatch();

  // Access products and search-related states from the Redux store
  const products = useSelector((state) => state.products); // List of products
  const searchTerm = useSelector((state) =>
    state.search.searchTerm.toLowerCase()
  ); // Current search term (converted to lowercase)
  const selectedCategory = useSelector(
    (state) => state.category.selectedCategory
  ); // Currently selected category

  // Component's internal state
  const [isEditing, setIsEditing] = useState(false); // Controls visibility of the edit modal
  const [selectedProduct, setSelectedProduct] = useState(null); // Tracks the product being edited

  /**
   * Memoized filtering logic to avoid unnecessary re-renders
   * Filters products based on the search term and selected category
   */
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm);
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [products, searchTerm, selectedCategory]);

  /**
   * Handles the "Edit" button click
   * Opens the edit modal and sets the selected product for editing
   */
  const handleEditClick = useCallback((product) => {
    setSelectedProduct(product);
    setIsEditing(true);
  }, []);

  /**
   * Handles saving changes to the edited product
   * Dispatches the editProduct action to update the product in the Redux store
   */
  const handleSaveChanges = useCallback(() => {
    if (selectedProduct) {
      dispatch(editProduct(selectedProduct));
    }
    setIsEditing(false); // Closes the modal
  }, [dispatch, selectedProduct]);

  /**
   * Handles deleting a product
   * Dispatches the deleteProduct action to remove the product from the Redux store
   */
  const handleDeleteProduct = useCallback(
    (id) => {
      dispatch(deleteProduct(id));
    },
    [dispatch]
  );

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {/* Table wrapper */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          {/* Table Header */}
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Stock
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredProducts.map((product) => (
              <tr key={product.id}>
                {/* Product Name */}
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {product.name}
                </td>
                {/* Category */}
                <td className="px-6 py-4 text-sm text-gray-500">
                  {product.category}
                </td>
                {/* Stock */}
                <td className="px-6 py-4 text-sm text-gray-500">
                  {product.stock}
                </td>
                {/* Price */}
                <td className="px-6 py-4 text-sm text-gray-500">
                  ₹{product.price}
                </td>
                {/* Stock Status */}
                <td className="px-6 py-4 text-sm text-gray-500">
                  {product.stock < 20 ? (
                    <span className="text-red-500 font-semibold md:bg-red-200 py-0.5 px-3 rounded-lg">
                      Low Stock
                    </span>
                  ) : (
                    <span className="text-green-700 md:bg-green-200 font-semibold py-0.5 px-3 rounded-lg">
                      In Stock
                    </span>
                  )}
                </td>
                {/* Actions (Edit/Delete) */}
                <td className="px-6 py-4 text-right text-sm font-medium">
                  <button
                    onClick={() => handleEditClick(product)}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteProduct(product.id)}
                    className="text-red-600 hover:text-red-900 ml-4"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      {isEditing && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
              Edit Product
            </h2>
            <form className="space-y-4">
              {/* Product Name Input */}
              <div>
                <label
                  htmlFor="productName"
                  className="block text-sm font-medium text-gray-600 mb-1"
                >
                  Product Name
                </label>
                <input
                  id="productName"
                  type="text"
                  value={selectedProduct.name}
                  onChange={(e) =>
                    setSelectedProduct({
                      ...selectedProduct,
                      name: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Category Input */}
              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-600 mb-1"
                >
                  Category
                </label>
                <input
                  id="category"
                  type="text"
                  value={selectedProduct.category}
                  onChange={(e) =>
                    setSelectedProduct({
                      ...selectedProduct,
                      category: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Stock Input */}
              <div>
                <label
                  htmlFor="stock"
                  className="block text-sm font-medium text-gray-600 mb-1"
                >
                  Stock
                </label>
                <input
                  id="stock"
                  type="number"
                  value={selectedProduct.stock}
                  onChange={(e) =>
                    setSelectedProduct({
                      ...selectedProduct,
                      stock: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Price Input */}
              <div>
                <label
                  htmlFor="price"
                  className="block text-sm font-medium text-gray-600 mb-1"
                >
                  Price
                </label>
                <input
                  id="price"
                  type="number"
                  value={selectedProduct.price}
                  onChange={(e) =>
                    setSelectedProduct({
                      ...selectedProduct,
                      price: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </form>

            {/* Modal Buttons */}
            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg shadow hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveChanges}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InventoryTable;
