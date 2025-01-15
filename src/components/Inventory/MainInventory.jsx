import React, { useState } from "react";
import InventoryTable from "../Inventory/Table.jsx";
import InventoryHeader from "../Inventory/AddProduct";

const MainInventory = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "NPK Fertilizer",
      category: "Fertilizers",
      stock: "250 units",
      price: "₹750/unit",
      status: "In Stock",
    },
    {
      id: 2,
      name: "Wheat Seeds",
      category: "Seeds",
      stock: "50 kg",
      price: "₹120/kg",
      status: "Low Stock",
    },
  ]);

  const [editingProduct, setEditingProduct] = useState(null);

  const handleAddProduct = (product) => {
    setProducts([...products, product]);
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
  };

  const handleSaveEdit = () => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === editingProduct.id ? editingProduct : product
      )
    );
    setEditingProduct(null);
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="mt-5">
      {/* <InventoryHeader onAddProduct={handleAddProduct} /> */}
      <InventoryTable
        products={products}
        onEditProduct={handleEditProduct}
        onDeleteProduct={handleDeleteProduct}
        editingProduct={editingProduct}
        setEditingProduct={setEditingProduct}
        handleSaveEdit={handleSaveEdit}
      />
    </div>
  );
};

export default MainInventory;
