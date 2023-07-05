import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
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
  const [email, setEmail] = useState("");
  const [signupSuccess, setSignupSuccess] = useState(false);
  const classes = useStyles();

  const handleSignup = (e) => {
    e.preventDefault();
    // Store user information in localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    localStorage.setItem("email", email);
    setSignupSuccess(true);
    alert("Try to login Signup is completed");
  };

  return (
    <div className="signup-container">
      <h1>Sign up</h1>
      <p>
        or <a href="#">login to your account</a>
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
