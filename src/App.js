import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
import Login from "./components/MainPage/Login";
import RestaurantList from "./components/Restaurant/RestaurantList";
import Signup from "./components/MainPage/Signup";
import "./components/styles.css";
import MainSec from "./components/MainPage/Main";
import RestaurantPage from "./components/Restaurant/RestaurantPage";
import Navbar from "./components/Navbar/Navbar";
import PaymentSuccess from "./components/Restaurant/PaymentSuccess";
import Account from "./components/MainPage/Account";
const App = () => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  const isPaymentsuccess = localStorage.getItem("ispaymentsuccess") === "true";
  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route path="/main" element={<MainSec />} />
          </Routes>
          <Routes>
            <Route
              path="/login"
              element={
                isAuthenticated ? <Navigate to="/restaurants" /> : <Login />
              }
            />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/restaurants"
              element={
                isAuthenticated ? (
                  <>
                    <Navbar />
                    <RestaurantList />
                  </>
                ) : (
                  <div>
                    <p>
                      Please <Link to="/login">login</Link> to access the
                      restaurant list.
                    </p>
                    <p>
                      Don't have an account? <Link to="/signup">Signup</Link>
                    </p>
                  </div>
                )
              }
            />
            <Route
              path="/restaurants/:hotelId"
              element={
                <>
                  <Navbar />
                  <RestaurantPage />
                </>
              }
            />
            <Route path="/account" element={<Account />} />
            <Route
              path="/paymentsuccess"
              element={
                isPaymentsuccess ? (
                  <PaymentSuccess />
                ) : (
                  <div>
                    <p>Payment Not yet confirmed</p>
                  </div>
                )
              }
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
