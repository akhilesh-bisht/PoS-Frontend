import React, { useState } from "react";
const ProductPage = ({ products }) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Filter products based on search and category
  const handleFilter = () => {
    let filtered = products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );

    if (category !== "All") {
      filtered = filtered.filter((product) => product.category === category);
    }

    setFilteredProducts(filtered);
  };

  // Run filter on search or category change
  React.useEffect(() => {
    handleFilter();
  }, [search, category]);

  return (
    <div>
      {/* Search Bar and Category Filter */}
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

      {/* Product Table */}
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">Product</th>
            <th className="border border-gray-300 p-2">Category</th>
            <th className="border border-gray-300 p-2">Stock</th>
            <th className="border border-gray-300 p-2">Price</th>
            <th className="border border-gray-300 p-2">Status</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.id} className="hover:bg-gray-100">
              <td className="border border-gray-300 p-2">{product.name}</td>
              <td className="border border-gray-300 p-2">{product.category}</td>
              <td className="border border-gray-300 p-2">{product.stock}</td>
              <td className="border border-gray-300 p-2">{product.price}</td>
              <td
                className={`border border-gray-300 p-2 ${
                  product.status === "Low Stock"
                    ? "text-red-500"
                    : "text-green-600"
                }`}
              >
                {product.status}
              </td>
              <td className="border border-gray-300 p-2 flex gap-2">
                <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
                  Delete
                </button>
                <button className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600">
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
    </div>
  );
};

export default ProductPage;
