import "./Cardview.css";
import React from "react";
import { Link } from "react-router-dom";
const Cardview = (props) => {
  const handleitems = () => {
    console.log("Added to favorite list");
  };

  return (
    // <div className="card">
    //   <div className="cardbody">
    //     <img className="card__image" src={props.image} alt="Placeholder" />
    //     <h2 className="card__title">Restaurant: {props.name}</h2>
    //     <p className="card__description">Hotel Id :{props.id}</p>
    //     <p className="card__description">Description: {props.description}</p>
    //     <p className="card__description">Rating: # {props.rating}</p>
    //   </div>
    //   <button className="card__btn" onClick={handleitems}>
    //     View Items
    //   </button>
    <div className="restaurant-tile">
      <a href="#" className="restaurant-tile-wrapper">
        <div className="restaurant-tile-body">
          <div className="">
            <div className="restaurant-tile-body-image-wrapper">
              <img
                className=""
                alt="Frozen Bottle"
                width="254"
                height="160"
                src={props.image}
              />
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
              <div className="">HoTel Id:{props.Hotelid}</div>
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
      </a>
    </div>
    // </div>
  );
};

export default Cardview;
