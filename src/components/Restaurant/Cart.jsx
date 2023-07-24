import React from "react";
import "./Cart.css";
import { useCartStore } from "./useCartStore";
import { Navigate } from "react-router-dom";

const Cart = () => {
  const cartItems = useCartStore((state) => state.cartItems);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const setTotal = useCartStore((state) => state.setTotal);
  const data = useCartStore((state) => state.data);
  const Hotelid = sessionStorage.getItem("Hotelid");

  const taxRate = 0.05;
  const shippingRate = 15.0;
  console.log("~! cart", cartItems);
  const handleQuantityChange = (index, e) => {
    const newQuantity = parseInt(e.target.value);
    updateQuantity(index, newQuantity);
  };

  const handleRemoveItem = (index) => {
    removeFromCart(index);
  };

  const recalculateCart = () => {
    let subtotal = 0;

    cartItems.forEach((item) => {
      subtotal += item.price * (item.quantity || 1);
    });
    const tax = subtotal * taxRate;
    const shipping = subtotal > 0 ? shippingRate : 0;
    const total = subtotal + tax + shipping;
    setTotal(total);
    return { subtotal, tax, shipping, total };
  };
  const { subtotal, tax, shipping, total } = recalculateCart();
  const handleDecrease = (index) => {
    const newQuantity = Math.max((cartItems[index].quantity || 1) - 1, 1);
    updateQuantity(index, newQuantity);
  };

  const handleIncrease = (index) => {
    const newQuantity = (cartItems[index].quantity || 1) + 1;
    updateQuantity(index, newQuantity);
  };

  return (
    <>
      <div className="cart-container">
        <span>
          <img src={data[Hotelid].img_url} alt="" className="image" />
          <h4>{data[Hotelid].name}</h4>
          <h6>{data[Hotelid].cuisines[0]}</h6>
        </span>
        <hr></hr>
        <div className="column-labels">
          <label className="product-details">Product</label>
          <label className="product-quantity">Quantity</label>
          <label className="product-price">Price</label>
          <label className="product-removal">Remove</label>
        </div>
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div className="product" key={index}>
              <p>{item.name}</p>
              <div className="product-quantity">
                <button onClick={() => handleDecrease(index)}>-</button>
                <span> {item.quantity || 1} </span>
                <button onClick={() => handleIncrease(index)}>+</button>
              </div>
              <div className="product-line-price">
                <p>
                  &#x20B9;
                  {Number((item.price * (item.quantity || 1)).toFixed(2))}
                </p>
              </div>
              <div className="product-removal">
                <button onClick={() => handleRemoveItem(index)}>Remove</button>
              </div>
            </div>
          ))
        ) : (
          <div>
            <Navigate to="/noitems" />
          </div>
        )}

        {cartItems.length > 0 && (
          <div>
            <h5>Bill Details</h5>
            <div id="cart-total">
              <div id="cart-subtotal">
                <p>Sub-Total: &#x20B9; {Number(subtotal.toFixed(2))}</p>
              </div>
              <div id="cart-shipping">
                <p>Delivery Fee : &#x20B9; {shipping.toFixed(2)}</p>
              </div>
              <div className="dottedline" />
              <div id="cart-tax">
                <p>Tax: &#x20B9; {tax.toFixed(2)}</p>
              </div>
              <h6 className="boldline">To Pay : &#x20B9; {total.toFixed(2)}</h6>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
