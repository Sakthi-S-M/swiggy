import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import RestaurantList from "./components/Restaurant/RestaurantList";
import Signup from "./components/MainPage/Signup";
import "./components/styles.css";
import MainSec from "./components/MainPage/Main";
import RestaurantPage from "./components/Restaurant/RestaurantPage";
import Navbar from "./components/Navbar/Navbar";
import PaymentSuccess from "./components/Restaurant/PaymentSuccess";
import Checkout from "./components/Restaurant/Checkout";
import EmptyCart from "./components/Restaurant/EmptyCart";
import Logout from "./components/MainPage/Logout";
import { isAuthenticated } from "./authUtils";

const PrivateRoute = ({ path, element }) => {
  if (!isAuthenticated() && path !== "/login") {
    return <Navigate to="/signup" />;
  }

  return element;
};

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route path="/view/home" element={<MainSec />} />
            <Route
              path="/login"
              element={
                <div>
                  <Navigate to="/restaurants" />
                </div>
              }
            />
            <Route path="/signup" element={<Signup />} />
            <Route path="/logout" element={<Logout />} />
            <Route
              path="/checkout"
              element={<PrivateRoute path="/checkout" element={<Checkout />} />}
            />
            <Route
              path="/restaurants"
              element={
                <PrivateRoute
                  path="/restaurants"
                  element={<RestaurantList />}
                />
              }
            />
            <Route
              path="/restaurants/:hotelId"
              element={
                <PrivateRoute
                  path="/restaurants/:hotelId"
                  element={
                    <>
                      <Navbar />
                      <RestaurantPage />
                    </>
                  }
                />
              }
            />

            <Route
              path="/paymentsuccess"
              element={
                <PrivateRoute
                  path="/paymentsuccess"
                  element={<PaymentSuccess />}
                />
              }
            />
            <Route
              path="/noitems"
              element={<PrivateRoute path="/noitems" element={<EmptyCart />} />}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
