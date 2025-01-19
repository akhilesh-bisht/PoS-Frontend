import React from "react";

const InventoryTable = ({
  products = [],
  onEditProduct,
  onDeleteProduct,
  editingProduct,
  setEditingProduct,
  handleSaveEdit,
}) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product
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
          <tbody className="divide-y divide-gray-200">
            {products.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-4 test-sm">
                  No products available
                </td>
              </tr>
            ) : (
              products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-xs md:text-base">
                    {editingProduct?.id === product.id ? (
                      <input
                        type="text"
                        className="border p-1 "
                        value={editingProduct.name}
                        onChange={(e) =>
                          setEditingProduct({
                            ...editingProduct,
                            name: e.target.value,
                          })
                        }
                      />
                    ) : (
                      product.name
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs md:text-base">
                    {editingProduct?.id === product.id ? (
                      <input
                        type="text"
                        className="border p-1"
                        value={editingProduct.category}
                        onChange={(e) =>
                          setEditingProduct({
                            ...editingProduct,
                            category: e.target.value,
                          })
                        }
                      />
                    ) : (
                      product.category
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs md:text-base">
                    {editingProduct?.id === product.id ? (
                      <input
                        type="text"
                        className="border  bg-green-400 p-2"
                        value={editingProduct.stock}
                        onChange={(e) =>
                          setEditingProduct({
                            ...editingProduct,
                            stock: e.target.value,
                          })
                        }
                      />
                    ) : (
                      product.stock
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs md:text-base">
                    {editingProduct?.id === product.id ? (
                      <input
                        type="text"
                        className="border p-1"
                        value={editingProduct.price}
                        onChange={(e) =>
                          setEditingProduct({
                            ...editingProduct,
                            price: e.target.value,
                          })
                        }
                      />
                    ) : (
                      product.price
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs md:text-base">
                    {editingProduct?.id === product.id ? (
                      <input
                        type="text"
                        className="border p-1"
                        value={editingProduct.status}
                        onChange={(e) =>
                          setEditingProduct({
                            ...editingProduct,
                            status: e.target.value,
                          })
                        }
                      />
                    ) : (
                      product.status
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-xs md:text-base">
                    {editingProduct?.id === product.id ? (
                      <button
                        onClick={handleSaveEdit}
                        className="text-green-600 hover:text-green-800"
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        onClick={() => onEditProduct(product)}
                        className="text-blue-600 hover:text-blue-800 mr-3"
                      >
                        Edit
                      </button>
                    )}
                    <button
                      onClick={() => onDeleteProduct(product.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryTable;
