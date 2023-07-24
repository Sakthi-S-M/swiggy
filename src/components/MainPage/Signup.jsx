import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import CryptoJS from "crypto-js";

import "../styles.css";
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

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [phoneno, setphoneno] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  let flag = 0;
  const [signupSuccess, setSignupSuccess] = useState(false);
  const classes = useStyles();
  const handlepassword = (password) => {
    let passwrd = password;
    let lowercase = /[a-z]/g;
    let uppercase = /[A-Z]/g;
    let numbers = /[0-9]/g;
    if (!passwrd.match(lowercase)) {
      setErrorMessage("Password should contains lowercase letters!");
    } else if (!passwrd.match(uppercase)) {
      setErrorMessage("Password should contain uppercase letters!");
    } else if (!passwrd.match(numbers)) {
      setErrorMessage("Password should contains numbers also!");
    } else if (passwrd.length < 10) {
      setErrorMessage("Password length should be more than 10.");
    } else {
      return (flag = 1);
    }
  };
  const handleSignup = (e) => {
    e.preventDefault();
    const encryptedPassword = CryptoJS.AES.encrypt(
      password,
      "secret-key"
    ).toString();
    const newUser = {
      username: username,
      password: encryptedPassword,
      email: email,
      phoneno: phoneno,
    };

    const storedUsers = localStorage.getItem("users");
    let users = [];
    if (storedUsers) {
      users = JSON.parse(storedUsers);
    }
    const existingUser = users.find((user) => user.username === username);
    if (existingUser) {
      swal("Error", "Username already exists!", "error");
      return;
    }

    flag = handlepassword(password);

    if (flag === 1) {
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      setSignupSuccess(true);

      swal("Good Job!", "You have signed up login to explore foods", "success");
      navigate("/view/home");
    } else {
      swal("Try Again");
    }
  };
  const handlelogin = () => {
    navigate("/view/home");
  };

  return (
    <div className="signup-container">
      <h1>Sign up</h1>
      <p>
        or{" "}
        <button className="buttonlogin" onClick={handlelogin}>
          Login
        </button>
      </p>
      <form noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          label="Username"
          type="tel"
          fullWidth
          className={classes.root}
          style={{ marginTop: "20px" }}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          id="standard-basic"
          label="Password"
          type="password"
          className={classes.root}
          fullWidth
          style={{ marginTop: "20px" }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div style={{ color: "red" }}> {errorMessage} </div>
        <TextField
          id="standard-basic"
          label="Email"
          type="email"
          className={classes.root}
          fullWidth
          style={{ marginTop: "20px" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="standard-basic"
          label="PhoneNo"
          type="text"
          className={classes.root}
          fullWidth
          style={{ marginTop: "20px" }}
          value={phoneno}
          onChange={(e) => setphoneno(e.target.value)}
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
          onClick={handleSignup}
        >
          Sign up
        </Button>
      </form>
    </div>
  );
};

export default Signup;
