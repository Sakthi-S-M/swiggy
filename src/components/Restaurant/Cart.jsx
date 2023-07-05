import React, { useState, useEffect } from "react";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = ({ initialCartItems, onAddToCart }) => {
  const navigate = useNavigate();

  const taxRate = 0.05;
  const shippingRate = 15.0;
  const fadeTime = 300;
  useEffect(() => {
    setCartItems(initialCartItems);
  }, [initialCartItems]);
  const [cartItems, setCartItems] = useState(initialCartItems);

  const updateQuantity = (index, quantity) => {
    const updatedItems = [...cartItems];
    updatedItems[index].quantity = quantity;
    setCartItems(updatedItems);
  };

  const removeItem = (index) => {
    const updatedItems = [...cartItems];
    updatedItems.splice(index, 1);
    setCartItems(updatedItems);
  };

  const recalculateCart = () => {
    let subtotal = 0;
    cartItems.forEach((item) => {
      subtotal += item.price * item.quantity;
    });
    const tax = subtotal * taxRate;
    const shipping = subtotal > 0 ? shippingRate : 0;
    const total = subtotal + tax + shipping;
    return { subtotal, tax, shipping, total };
  };

  const handleQuantityChange = (index, e) => {
    const newQuantity = parseInt(e.target.value);
    updateQuantity(index, newQuantity);
  };

  const handleRemoveItem = (index) => {
    removeItem(index);
  };

  const { subtotal, tax, shipping, total } = recalculateCart();
  const handleCheckout = (e) => {
    e.preventDefault();
    localStorage.setItem("ispaymentsuccess", "true");
    alert("Payment success");
    navigate("/paymentsuccess");
  };
  return (
    <>
      <div class="cart-container">
        <h4>CART DETAILS</h4>
        <div class="column-labels">
          <label class="product-details">Product</label>
          <label class="product-quantity">Quantity</label>
          <label class="product-price">Price</label>
          <label class="product-removal">Remove</label>
          <label class="product-line-price">Total</label>
        </div>
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div className="product" key={index}>
              <p>{item.name}</p>
              <div className="product-quantity">
                <input
                  type="number"
                  value={item.quantity}
                  min={1}
                  onChange={(e) => handleQuantityChange(index, e)}
                />
              </div>
              <div className="product-line-price">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
              <div className="product-removal">
                <button onClick={() => handleRemoveItem(index)}>Remove</button>
              </div>
            </div>
          ))
        ) : (
          <div>No items in Cart</div>
        )}

        <div>
          <div id="cart-subtotal">Sub-Total:${subtotal.toFixed(2)}</div>
          <div id="cart-tax">Tax:${tax.toFixed(2)}</div>
          <div id="cart-shipping">Shipping Amount :${shipping.toFixed(2)}</div>
          <div id="cart-total">Total:${total.toFixed(2)}</div>
        </div>

        <div
          className="checkout"
          style={{ display: total === 0 ? "none" : "block" }}
        >
          <button onClick={handleCheckout}>Checkout</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
