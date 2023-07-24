/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "../styles.css";
import Login from "./Login";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import Signup from "./Signup";

const styleHidden = {
  display: "none",
};

const styleVisible = {
  display: "block",
};

const Main = () => {
  const [signupState, setSignupState] = useState(styleHidden);
  const [loginState, setLoginState] = useState(styleHidden);
  const [location, setlocation] = useState("");
  const openLogin = () => {
    if (loginState === styleHidden) {
      if (signupState === styleVisible) {
        setSignupState(styleHidden);
      }
      setLoginState(styleVisible);
    } else {
      setLoginState(styleHidden);
    }
  };

  const openSignup = () => {
    if (signupState === styleHidden) {
      if (loginState === styleVisible) {
        setLoginState(styleHidden);
      }
      setSignupState(styleVisible);
    } else {
      setSignupState(styleHidden);
    }
  };
  const getlocation = () => {
    const successCallback = (position) => {
      const { latitude, longitude } = position.coords;
      console.log(latitude, longitude);
      fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=ee1d76cbf4304d04a42eca1b00efbee4`
      )
        .then((response) => response.json())
        .then((data) => {
          setlocation(data.results[0].formatted);
          localStorage.setItem("Location", data.results[0].formatted);
          console.log(location);
          // console.log(data);
        });
    };

    const errorCallback = (error) => {
      console.log(error);
    };

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  };

  return (
    <>
      <section className="main">
        <div className="container">
          <header>
            <div className="logo">
              <h4>Swiggy</h4>
            </div>
            <div className="reg">
              <a href="javascript:void(0)" onClick={openLogin}>
                Login
              </a>
              <a href="javascript:void(0)" onClick={openSignup}>
                Sign up
              </a>
            </div>
          </header>
          <div className="slidetxt">
            <div>
              <span>Hungry?</span>
              <span>Unexpected guests?</span>
              <span>Cooking gone wrong?</span>
              <span>Late night at office?</span>
              <span>Hungry?</span>
            </div>
          </div>
          <p>Order food from restaurants near you.</p>
          <div className="searchbox">
            <input
              type="text"
              placeholder="Enter your location"
              value={location.slice(0, 60)}
            />
            <div className="btn-container">
              <Button
                style={{
                  height: "100%",
                  borderRadius: "0",
                  padding: "0 15px",
                  color: "#505160",
                  textTransform: "none",
                }}
                onClick={getlocation}
              >
                Locate me
              </Button>
              <Button
                variant="contained"
                style={{
                  height: "100%",
                  backgroundColor: "#fb6542",
                  color: "#fff",
                  borderRadius: "0",
                  border: "1px solid #fb6542",
                  fontWeight: "600",
                  padding: "0 22px",
                }}
              >
                find food
              </Button>
            </div>
          </div>
        </div>
        <div className="img-container">
          <img
            src="https://www.hotelierindia.com/wp-content/uploads/cloud/2023/05/08/image-6-1024x768.png"
            alt=""
          />
        </div>
      </section>
      {loginState === styleVisible && <Login id="login" styles={loginState} />}
      {signupState === styleVisible && (
        <Signup id="signup" styles={signupState} />
      )}
    </>
  );
};

export default Main;
