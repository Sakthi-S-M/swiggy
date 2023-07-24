import React from "react";
import "./Card.css";
const Card = (props) => {
  return (
    <>
      <div className="card">
        <div className="restaurant-ratings">
          <span className="star">&#9733;</span>
          <span className="parac">
            <b>{props.rating || "N/A"}</b>
          </span>
          <div className="dotted-line"></div>
        </div>
        <div className="dotted-line"></div>
        <h6 className="parac">100+ Ratings</h6>
      </div>
    </>
  );
};
export default Card;
