import React from "react";
import Navbar from "../Navbar/Navbar";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";
import "../styles.css";
const Logout = () => {
  const navigate = useNavigate();
  const handlelogout = () => {
    localStorage.setItem("isAuthenticated", "false");
    navigate("/view/home");
  };
  return (
    <>
      <Navbar />
      <div className="emptycontainer">
        <div className="elements">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/logout-account-5649064-4707120.png"
            alt=""
          />
          <h4>Are you sure to logout</h4>
          <h6>Don't miss the foods here!</h6>
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
            onClick={handlelogout}
          >
            Logout
          </Button>
        </div>
      </div>
    </>
  );
};
export default Logout;
