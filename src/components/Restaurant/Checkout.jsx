import React from "react";
import Cart from "./Cart";
import Navbar from "../Navbar/Navbar";
import Step from "./Step";
import { useCartStore } from "./useCartStore";
import "./Checkout.css";
const Checkout = () => {
  const cartItems = useCartStore((state) => state.cartItems);
  return (
    <>
      <div className="checkout-container">
        <Navbar />
        <Step />
        <Cart initialCartItems={cartItems} />
      </div>
    </>
  );
};
export default Checkout;
