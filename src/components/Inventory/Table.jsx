import React from "react";

const InventoryTable = ({
  products = [],
  onEditProduct,
  onDeleteProduct,
  onAddProduct,
}) => {
  console.log(products);

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {/* Table Wrapper */}
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
            {products.map((product) => (
              <tr key={product.id}>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {product.name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {product.category}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {product.stock}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{`${product.price}`}</td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {product.status === "Available" ? (
                    <span className="text-green-500 font-semibold">
                      {product.status}
                    </span>
                  ) : (
                    <span className="text-red-500 font-semibold">
                      {product.status}
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 text-right text-sm font-medium">
                  {/* Edit Button */}
                  <button
                    onClick={() => onEditProduct(product.id)}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    Edit
                  </button>
                  {/* Delete Button */}
                  <button
                    onClick={() => onDeleteProduct(product.id)}
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
    </div>
  );
};

export default InventoryTable;
