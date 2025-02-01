import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ItemCard from "./ItemCard";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);

  // Fetch cart items from Redux state
  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );

  const navigate = useNavigate();

  return (
    <>
      {/* Cart Sidebar */}
      <div
        className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full p-5 bg-white shadow-lg ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 z-50`}
      >
        {/* Cart Header */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-bold text-gray-800">My Order</span>
          <IoMdClose
            onClick={() => setActiveCart(false)}
            className="border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-500 hover:border-red-500 cursor-pointer"
          />
        </div>

        {/* Cart Items */}
        {cartItems.length > 0 ? (
          <div className="space-y-4">
            {cartItems.map((item, index) => (
              <ItemCard
                key={index}
                id={item.id}
                name={item.name}
                price={item.price}
                img={item.img}
                qty={item.qty}
              />
            ))}
          </div>
        ) : (
          <h2 className="text-center text-xl font-bold text-gray-600 mt-10">
            Your cart is empty
          </h2>
        )}
        <div className="mt-5">
          <div className="text-gray-800 font-semibold space-y-2">
            <p>Items: {totalQty}</p>
            <p>Total Amount: ₹{totalPrice.toFixed(2)}</p>
          </div>
          <hr className="my-3" />
          <button
            onClick={() => {
              setActiveCart(false);
              navigate("/payment");
            }}
            className={`bg-green-500 font-bold px-4 py-2 rounded-lg w-full text-white ${
              cartItems.length === 0
                ? "cursor-not-allowed opacity-50"
                : "hover:bg-green-600"
            }`}
            disabled={cartItems.length === 0}
          >
            Checkout
          </button>
        </div>
      </div>
      {/* Cart Icon */}
      <FaShoppingCart
        size={50}
        onClick={() => setActiveCart(!activeCart)}
        className={`-top-16 right-12 sm:right-14 text-5xl p-3  bg-white  rounded-full cursor-pointer sticky  ${
          totalQty > 0 ? "block" : "hidden"
        }`}
      />
      <span
        className={` text-[10px] w-4 h-4  sm:w-5 sm:h-5  top-1 bg-red-600  rounded-full cursor-pointer text-center text-white absolute ${
          totalQty > 0 ? "block" : "hidden"
        }`}
      >
        {totalQty}
      </span>
    </>
  );
};

export default Cart;
