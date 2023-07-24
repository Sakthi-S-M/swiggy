import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FoodCard from "./FoodCard";
import { FaAmazonPay } from "react-icons/fa";
import { ImOffice } from "react-icons/im";
import Card from "../Widgets/Card";
import { BiAdjust } from "react-icons/bi";
import { useCartStore, setItemsBasedOnRestaurant } from "./useCartStore";
import "./FoodCard.css";
import swal from "sweetalert2";

const RestaurantPage = () => {
  const { hotelId } = useParams();
  const addToCart = useCartStore((state) => state.addToCart);
  const RestaurantItems = useCartStore((state) => state.RestaurantItems);
  const [vegOnly, setVegOnly] = useState(false);
  useEffect(() => {
    setItemsBasedOnRestaurant(hotelId);
  }, [hotelId]);

  const handleAddToCart = (item) => {
    addToCart(item);
    swal.fire({
      toast: true,
      icon: "success",
      title: "Added to Cart",
      animation: false,
      position: "bottom",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });
    console.log("added");
  };

  const restaurant = useCartStore((state) =>
    state.data.find((restaurant) => restaurant.id === parseInt(hotelId))
  );

  if (!restaurant) {
    return <div>Loading...</div>;
  }
  const filterItemsByVeg = (items, vegOnly) => {
    if (vegOnly) {
      return items.filter((item) => item.veg);
    } else {
      return items;
    }
  };
  const filteredItems = filterItemsByVeg(RestaurantItems, vegOnly);

  return (
    <>
      <div className="main">
        <div className="container">
          <h2 className="Hotelname">{restaurant.name}</h2>
          <div className="para">
            <Card rating={restaurant.rating} />
          </div>
          <p className="para">Cuisines: {restaurant.cuisines}</p>
          <span className="para">
            {<ImOffice />} Free Delivery on order above Rs 1000
          </span>
          <p></p>
          <div className="dotted-line"></div>
          <p className="min">
            <BiAdjust />
            {restaurant.average_time} Mins &ensp;
            <FaAmazonPay /> &#x20B9; 200 for Each
          </p>
          <div>
            <span>
              Veg Only{" "}
              <label className="switch">
                <input
                  type="checkbox"
                  id="vegOnlyToggle"
                  checked={vegOnly}
                  onChange={() => setVegOnly(!vegOnly)}
                />
                <span className="slider"></span>
              </label>
            </span>
          </div>
          <br></br>
          <hr></hr>
          <h4>Items {filteredItems.length}</h4>
          <hr></hr>
          {filteredItems.map((item) => (
            <React.Fragment key={item.id}>
              <FoodCard
                foodName={item.name}
                foodDescription={item.description}
                foodPrice={item.price}
                foodimage={item.img_url}
                onAddToCart={() => handleAddToCart(item)}
              />
              <div className="dottedline"></div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default RestaurantPage;
