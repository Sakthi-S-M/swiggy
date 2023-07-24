import React from "react";
import "./FoodCard.css";
const FoodCard = ({
  foodName,
  foodDescription,
  foodPrice,
  onAddToCart,
  foodimage,
}) => {
  return (
    <>
      <div className="food-card">
        <div className="food-card-content">
          <div className="vegbox">&#9856;</div>
          <h3>{foodName}</h3>
          <b>
            <p> &#x20B9; {foodPrice}</p>
          </b>

          <button onClick={onAddToCart} className="add_cart">
            Add
          </button>
        </div>
        <div className="dottedline"></div>
        <div className="food-card-image">
          <img src={foodimage} className="food-image" alt="" />
        </div>
      </div>
    </>
  );
};

export default FoodCard;
