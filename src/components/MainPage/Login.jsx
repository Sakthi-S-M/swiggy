import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import "../styles.css";
import { useCartStore } from "../Restaurant/useCartStore";

import swal from "sweetalert";
import CryptoJS from "crypto-js";

const useStyles = makeStyles({
  root: {
    "& label.Mui-focused": {
      color: "#fb6542",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#fb6542",
    },
    "&:hover .MuiInput-underline:before": {
      borderBottomColor: "rgba(0, 0, 0, .42)",
    },
    "& .MuiButton-root": {
      backgroundColor: "#fb6542",
    },
  },
});
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const classes = useStyles();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUsers = localStorage.getItem("users");
    if (!storedUsers) {
      swal("Try Again", "No registered users found", "error");
      return;
    }
    const users = JSON.parse(storedUsers);
    const user = users.find((user) => user.username === username);
    const index = users.findIndex((user) => user.username === username);
    if (!user) {
      swal("Try Again", "Invalid username or password", "error");
      return;
    }
    const storedPassword = user.password;
    const decryptedPassword = CryptoJS.AES.decrypt(
      storedPassword,
      "secret-key"
    ).toString(CryptoJS.enc.Utf8);
    if (password === decryptedPassword) {
      console.log(users[index].username);
      const storedCartItems = localStorage.getItem(`cartItems_${username}`);
      const cartItems = storedCartItems ? JSON.parse(storedCartItems) : [];
      useCartStore.getState().setCartItems(cartItems);
      sessionStorage.setItem("username", users[index].username);
      sessionStorage.setItem("activeuserphone", users[index].phoneno);
      sessionStorage.setItem("isAuthenticated", "true");
      swal("Login successful", "Explore foods near you", "success");
      navigate("/restaurants");
    } else {
      swal("Try Again", "Invalid username or password", "error");
    }
  };
  return (
    <div>
      <form className="form">
        <h2>Login</h2>
        <TextField
          id="standard-basic"
          label="username"
          type="tel"
          fullWidth
          className={classes.root}
          style={{ marginTop: "20px" }}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          id="standard-basic"
          label="password"
          type="password"
          fullWidth
          className={classes.root}
          style={{ marginTop: "20px" }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          fullWidth
          style={{
            backgroundColor: "#fb6542",
            color: "#fff",
            borderRadius: "0",
            boxShadow: "none",
            marginTop: "20px",
          }}
          onClick={handleLogin}
        >
          login
        </Button>
      </form>
    </div>
  );
};

export default Login;
