import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  deleteProduct,
  editProduct,
} from "../../redux/Slices/productsSlice";
import InventoryTable from "./Table";

const MainInventory = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const handleAddProduct = (product) => {
    const newProduct = { ...product, id: Date.now() }; // Assign a unique ID
    dispatch(addProduct(newProduct));
  };

  const handleEditProduct = (updatedProduct) => {
    dispatch(editProduct(updatedProduct));
  };

  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
  };
  return (
    <div className="mt-5">
      {/* AddProduct form component goes here */}
      <InventoryTable
        products={products}
        onEditProduct={handleEditProduct}
        onDeleteProduct={handleDeleteProduct}
        onAddProduct={handleAddProduct}
      />
    </div>
  );
};

export default MainInventory;
