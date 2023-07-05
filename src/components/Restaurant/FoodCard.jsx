import React from "react";
const FoodCard = ({
  foodName,
  foodDescription,
  foodPrice,
  onAddToCart,
  foodimage,
}) => {
  const handleAddToCart = () => {
    onAddToCart(foodName, foodPrice);
  };

  return (
    <>
      <div className="food-card">
        <h3>{foodName}</h3>
        <img src={foodimage} className="Food" alt=""></img>
        <i>
          <p>Description: {foodDescription}</p>
        </i>
        <b>
          <p>Price: ${foodPrice}</p>
        </b>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </>
  );
};

export default FoodCard;
