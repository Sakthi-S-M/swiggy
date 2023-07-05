import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
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
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
    if (username === storedUsername && password === storedPassword) {
      // Login successful
      localStorage.setItem("isAuthenticated", "true");
      alert("Login successful");
      navigate("/restaurants");
    } else {
      // Login failed
      alert("Invalid username or password");
    }
  };
  const classes = useStyles();
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
