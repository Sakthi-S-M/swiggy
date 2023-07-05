import React from "react";
import "./Account.css";
const Account = () => {
  return (
    <div className="full-container">
      <main className="profile">
        <div className="profile-bg"></div>
        <section className="sub-container">
          <aside className="profile-image">
            <a className="camera" href="#">
              <i className="fas fa-camera"></i>
            </a>
          </aside>
          <section className="profile-info">
            <h1 className="first-name">Order FaV Food!</h1>
            <h1 className="second-name">{localStorage.getItem("username")}</h1>
            <h2>Account Details</h2>
            <p>
              Order food online from restaurants and get it delivered. Order
              Pizzas, Burgers, Biryanis, Desserts or order from Subway, Pizza
              Hut, Dominos, KFC, McDonalds
              <br />
              Name : {localStorage.getItem("username")}
              <br />
              Email Id :{localStorage.getItem("email")}
            </p>
          </section>
        </section>
      </main>
    </div>
  );
};

export default Account;
