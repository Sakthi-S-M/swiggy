import "./Cardview.css";
import React from "react";
import { Link } from "react-router-dom";
const Cardview = (props) => {
  props.image.split(":")[0] !== "https" &&
    console.log("~! image url", props.image.split(":")[0]);
  return (
    <div className="restaurant-tile">
      <div className="restaurant-tile-body">
        <div className="">
          <div className="restaurant-tile-body-image-wrapper">
            <img alt="food" width="170" height="160" src={props.image} />
          </div>
          <div className="restaurant-tile-body-title-wrapper">
            <div className="restaurant-tile-body-title">{props.name}</div>
            <div className="restaurant-tile-body-subtitle"></div>
          </div>
          <div className="restaurant-tile-body-desc-wrapper">
            <div className="restaurant-tile-body-desc-ratings">
              <span className="star">&#9734;</span>
              <span>{props.rating || "N/A"}</span>
            </div>
            <div>•</div>
            <div>{props.averageTime}MINS</div>
            <div>•</div>
            <div>HoTel Id:{props.Hotelid}</div>
          </div>
          <div className="restaurant-tile-body-quick-view">
            <span
              role="button"
              aria-label="Open"
              className="restaurant-tile-body-quick-view-title"
            >
              <Link to={`/restaurants/${props.Hotelid}`} key={props.id}>
                QUICK VIEW
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Cardview;
