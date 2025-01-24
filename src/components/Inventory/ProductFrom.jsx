const ProductForm = ({
  productData,
  setProductData,
  handleSubmit,
  setIsProductFormOpen,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleSubmitProduct = (e) => {
    e.preventDefault();
    const newProduct = {
      ...productData,
      status: productData.stock < 20 ? "Low Stock" : "In Stock",
    };
    handleSubmit(newProduct);
    closeForm();
  };

  const closeForm = () => {
    setIsProductFormOpen(false);
    setProductData({
      name: "",
      category: "All",
      stock: "",
      price: "",
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 opacity-100">
      <div className="fixed top-0 right-0 w-full md:w-1/3 h-full bg-white shadow-lg z-50 transition-transform duration-300 translate-x-0">
        <div className="p-6">
          <div className="flex justify-between items-center">
            <h3 className="text-base ml-8 md:m-0 md:text-lg font-medium mb-4">
              Product Details
            </h3>
            <button onClick={closeForm} className="cursor-pointer text-xl">
              X
            </button>
          </div>
          <form
            onSubmit={handleSubmitProduct}
            className="space-y-4 text-sm mt-2"
          >
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
            />

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
            >
              <option value="All">All Categories</option>
              <option value="Fertilizers">Fertilizers</option>
              <option value="Seeds">Seeds</option>
              <option value="Pesticides">Pesticides</option>
              <option value="Manure">Manure</option>
            </select>

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
            />

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
            />

            <label htmlFor="status" className="block text-gray-700">
              Status
            </label>
            <input
              type="text"
              id="status"
              name="status"
              value={
                productData.stock === "" || isNaN(productData.stock)
                  ? "Unknown"
                  : productData.stock < 20
                  ? "Low Stock"
                  : "In Stock"
              }
              className="w-full border p-2 rounded bg-gray-200"
              readOnly
            />

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

export default ProductForm;
