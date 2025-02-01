import React, { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

const InventoryTable = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const searchTerm = useSelector((state) =>
    state.search.searchTerm.toLowerCase()
  ); // Current search term (converted to lowercase)
  const selectedCategory = useSelector(
    (state) => state.category.selectedCategory
  ); // Currently selected category
  const [editingProduct, setEditingProduct] = useState(null);

  const handleEditSubmit = () => {
    if (editingProduct) {
      dispatch(editProduct(editingProduct));
      setEditingProduct(null);
    }
  };

  /**
   * Memoized filtering logic to avoid unnecessary re-renders
   * Filters products based on the search term and selected category
   */
  const filteredProducts = useMemo(() => {
    if (!products?.items) return []; // Ensure items exist

    return products.items.filter((product) => {
      const productName = product.name?.toLowerCase() || ""; // Ensure name exists
      const matchesSearch = productName.includes(searchTerm);
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [products, searchTerm, selectedCategory]);

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              {[
                "Product",
                "Category",
                "HSN",
                "GST%",
                "Qty",
                "Price",
                "Status",
                "Actions",
              ].map((header) => (
                <th
                  key={header}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredProducts.map((product, index) => (
              <tr key={index}>
                <td className="px-6 py-4">{product.name}</td>
                <td className="px-6 py-4">{product.category}</td>
                <td className="px-6 py-4">{product.hsn_code}</td>
                <td className="px-6 py-4">{product.gst_rate}%</td>
                <td className="px-6 py-4">{product.stock}</td>
                <td className="px-6 py-4">₹{product.price}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded ${
                      product.status === "Low Stock"
                        ? "bg-yellow-100 text-yellow-800"
                        : product.status === "Out of Stock"
                        ? "bg-red-100 text-red-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {product.status}
                  </span>
                </td>
                <td className="px-6 py-4 space-x-2">
                  <button
                    onClick={() => setEditingProduct(product)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => dispatch(deleteProduct(product.id))}
                    className="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editingProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2">
          <div className="bg-white p-4 rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-lg">
            <h3 className="text-base md:text-lg font-semibold mb-3 text-center">
              Edit Product
            </h3>

            <div className="space-y-3 text-sm">
              {/* Basic Details */}
              <div>
                <h4 className="font-medium mb-1 border-b pb-1 text-sm">
                  Basic Info
                </h4>
                <div className="grid grid-cols-3 sm:grid-cols-3 gap-2">
                  {["name", "category", "batch_no"].map((key) => (
                    <div key={key}>
                      <label className="block text-xs font-medium capitalize">
                        {key.replace("_", " ")}
                      </label>
                      <input
                        type="text"
                        value={editingProduct[key] || ""}
                        onChange={(e) =>
                          setEditingProduct((prev) => ({
                            ...prev,
                            [key]: e.target.value,
                          }))
                        }
                        className="w-full p-2 border rounded text-xs"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing Section */}
              <div>
                <h4 className="font-medium mb-1 border-b pb-1 text-sm">
                  Pricing & Tax
                </h4>
                <div className="grid grid-cols-3 sm:grid-cols-3 gap-2">
                  {["rate", "gst_rate", "hsn_code"].map((key) => (
                    <div key={key}>
                      <label className="block text-xs font-medium capitalize">
                        {key.replace("_", " ")}
                      </label>
                      <input
                        type="number"
                        value={editingProduct[key] || ""}
                        onChange={(e) =>
                          setEditingProduct((prev) => ({
                            ...prev,
                            [key]: Number(e.target.value),
                          }))
                        }
                        className="w-full p-2 border rounded text-xs"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Stock Section */}
              <div>
                <h4 className="font-medium mb-1 border-b pb-1 text-sm">
                  Stock Details
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {["quantity", "min_quantity", "exp_date"].map((key) => (
                    <div key={key}>
                      <label className="block text-xs font-medium capitalize">
                        {key.replace("_", " ")}
                      </label>
                      <input
                        type={key === "exp_date" ? "date" : "number"}
                        value={editingProduct[key] || ""}
                        onChange={(e) =>
                          setEditingProduct((prev) => ({
                            ...prev,
                            [key]:
                              key === "exp_date"
                                ? e.target.value
                                : Number(e.target.value),
                          }))
                        }
                        className="w-full p-2 border rounded text-xs"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-between items-center gap-2 text-xs">
                <button
                  onClick={() => setEditingProduct(null)}
                  className="w-1/2 px-3 py-2 bg-gray-300 rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={handleEditSubmit}
                  className="w-1/2 px-3 py-2 bg-blue-500 text-white rounded"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InventoryTable;
