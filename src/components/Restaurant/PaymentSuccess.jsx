import React from "react";
import "./Paymentsuccess.css";
import useCartStore from "./useCartStore";
const OrderConfirmation = () => {
  const currentDate = new Date();
  const totalAmount = useCartStore((state) => state.totalAmount);

  const nextDay = new Date(currentDate);
  nextDay.setDate(currentDate.getDate() + 1);
  const min = 100000;
  const max = 10000000;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return (
    <div>
      <center>
        <img
          className="logo"
          src="https://play-lh.googleusercontent.com/A8jF58KO1y2uHPBUaaHbs9zSvPHoS1FrMdrg8jooV9ftDidkOhnKNWacfPhjKae1IA"
          alt="Swiggy Logo"
        />
      </center>
      <center>
        <br />
        <div className="box">
          <br />
          Your order for {totalAmount.toFixed(2)} will be ready for pickup on{" "}
          <b>{nextDay.toString()}</b> at <b>5:20pm.</b>
          <br />
          <br />
          Please grab your bowl close to your pick-up time and consume or
          refrigerate ASAP for the best taste. If your order is still on the
          shelf after 60 minutes.
        </div>
      </center>
      <center>
        <h4>
          {" "}
          World | India | Tamilnadu
          <br />
          <br />
          <div className="order">Order No :{randomNumber}</div>
        </h4>
        <br />
        <hr />
        <h4>
          Have questions? Write to us at <a href="/">support@swiggy.com</a>
        </h4>
        <h5>
          {" "}
          Tower D, 9th Floor, IBC Knowledge Park, Bangalore - 560029
          <br />
          <a href="/">www.swiggy.com</a>
        </h5>
        <img
          className="social"
          src="https://gallery.mailchimp.com/935cde8faa405d2d908226449/images/social_icons_02.png"
          alt="Social Icon"
        />
        <img
          className="social"
          src="https://gallery.mailchimp.com/935cde8faa405d2d908226449/images/social_icons_03.png"
          alt="Social Icon"
        />
        <img
          className="social"
          src="https://gallery.mailchimp.com/935cde8faa405d2d908226449/images/social_icons_04.png"
          alt="Social Icon"
        />
      </center>
    </div>
  );
};

export default OrderConfirmation;
