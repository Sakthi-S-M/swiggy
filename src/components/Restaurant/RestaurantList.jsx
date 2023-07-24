import React, { useEffect, useState } from "react";
import { useCartStore } from "./useCartStore";
import CardView from "./Cardview.js";
import "./RestaurantList.css";
import Navbar from "../Navbar/Navbar";
const RestaurantList = () => {
  const [myIndex, setMyIndex] = useState(0);
  const data = useCartStore((state) => state.data);
  useEffect(() => {
    const carousel = setInterval(() => {
      const images = document.getElementsByClassName("Slides");
      for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none";
      }
      setMyIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => {
      clearInterval(carousel);
    };
  }, []);

  useEffect(() => {
    const images = document.getElementsByClassName("Slides");
    for (let i = 0; i < images.length; i++) {
      images[i].style.display = "none";
    }
    images[myIndex].style.display = "block";
  }, [myIndex]);
  return (
    <>
      <Navbar />
      <div className="slideshow-container">
        <div className="slide">
          <center>
            <img
              className="Slides"
              src="https://carousels-ads.swiggy.com/images/slider/1.jpg"
              alt=""
            />
            <img
              className="Slides"
              src="https://carousels-ads.swiggy.com/images/slider/3.jpg"
              alt=""
            />
            <img
              className="Slides"
              src="https://carousels-ads.swiggy.com/images/slider/4.jpg"
              alt=""
            />
          </center>
        </div>
      </div>
      <br></br>
      <b>
        <h4 className="restaurant">Restaurant {data.length}</h4>
      </b>
      <hr></hr>
      <div className="restaurant-list-container">
        <>
          {data.map((restaurant) => (
            <CardView
              name={restaurant.name}
              description={restaurant.cuisines}
              image={restaurant.img_url}
              rating={restaurant.rating}
              averageTime={restaurant.average_time}
              Hotelid={restaurant.id}
            />
          ))}
        </>
      </div>
    </>
  );
};

export default RestaurantList;
