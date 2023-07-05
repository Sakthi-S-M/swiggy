/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "../styles.css";
import Login from "./Login";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import Signup from "./Signup";

const styleHidden = {
  right: "-460px",
};
const styleVisible = {
  right: "0",
};

const Main = () => {
  const [signupState, setSignupState] = useState(styleHidden);
  const [loginState, setLoginState] = useState(styleHidden);

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
            <input type="text" placeholder="Enter your location" />
            <div className="btn-container">
              <Button
                style={{
                  height: "100%",
                  borderRadius: "0",
                  padding: "0 15px",
                  color: "#505160",
                  textTransform: "none",
                }}
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
            src="https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/2018/03/08174730/Swiggy.jpg"
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
