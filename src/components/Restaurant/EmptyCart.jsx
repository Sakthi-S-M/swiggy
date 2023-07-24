import React from "react";
import Navbar from "../Navbar/Navbar";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";
import "../styles.css";
const EmptyCart = () => {
  const navigate = useNavigate();
  const handlerestaurant = () => {
    navigate("/restaurants");
  };
  return (
    <>
      <Navbar />
      <div className="emptycontainer">
        <div className="elements">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-4816550-4004141.png"
            alt=""
          />
          <h4>Your Cart is Empty</h4>
          <h6>you can go to view more restaurants</h6>
          <Button
            variant="contained"
            fullWidth
            style={{
              backgroundColor: "#fb6542",
              color: "#fff",
              borderRadius: "0",
              boxShadow: "none",
              width: "300px",
              marginTop: "20px",
            }}
            onClick={handlerestaurant}
          >
            SEE RESTAURANTS NEAR YOU
          </Button>
        </div>
      </div>
    </>
  );
};
export default EmptyCart;
