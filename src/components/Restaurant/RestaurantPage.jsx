import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../data/Mockdata";
import FoodCard from "./FoodCard";
import Cart from "./Cart";
import "./FoodCard.css";
const RestaurantPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showVegetarian, setShowVegetarian] = useState(false);

  const { hotelId } = useParams();
  const restaurant = data.find(
    (restaurant) => restaurant.id === parseInt(hotelId)
  );
  const getVegetarianItems = (items) => {
    return items.filter((item) => item.veg);
  };
  const allItems = data[parseInt(hotelId)].items;
  const userItems = showVegetarian ? getVegetarianItems(allItems) : allItems;
  const handleAddToCart = (foodName, foodPrice) => {
    const newItem = {
      name: foodName,
      price: foodPrice,
      quantity: 1,
    };
    setCartItems((prevItems) => [...prevItems, newItem]);
    console.log("added");
  };
  const handleToggleVegetarian = () => {
    setShowVegetarian((prevState) => !prevState);
  };
  return (
    <>
      <div className="container">
        <h2>Hotel : {restaurant.name}</h2>
        <img src={restaurant.img_url} alt={restaurant.name} />
        <p>Cuisines: {restaurant.cuisines}</p>
        <p>Rating: {restaurant.rating}</p>
        <p>Average Time: {restaurant.average_time}</p>
        <p></p>
        <line></line>
        <h4>Food to be Available here</h4>
        <button className="button-51" onClick={handleToggleVegetarian}>
          {showVegetarian ? "All" : "Vegetarian"}
        </button>
        <br></br>
        <hr></hr>
        <h4>Items {userItems.length}</h4>
        <hr></hr>
        {userItems.map((restaurant) => (
          <FoodCard
            foodName={restaurant.name}
            foodDescription={restaurant.description}
            foodPrice={restaurant.price}
            key={restaurant.id}
            foodimage={restaurant.img_url}
            onAddToCart={handleAddToCart}
          />
        ))}
        <Cart initialCartItems={cartItems} onAddToCart={handleAddToCart} />
      </div>
    </>
  );
};

export default RestaurantPage;
