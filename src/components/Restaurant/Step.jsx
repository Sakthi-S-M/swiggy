import React from "react";
import "./Step.css";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "./useCartStore";

const Step = () => {
  const navigate = useNavigate();

  const total = useCartStore((state) => state.total);
  const Location = localStorage.getItem("Location");
  const clearCart = useCartStore((state) => state.clearCart);

  const activeuser = sessionStorage.getItem("username");
  const activeuserphone = sessionStorage.getItem("activeuserphone");
  const handleCheckout = () => {
    localStorage.setItem("isPaymentSuccess", "true");
    clearCart();
    navigate("/paymentsuccess");
  };
  return (
    <>
      <div className="tab_container">
        <input id="tab1" type="radio" name="tabs" />
        <label htmlFor="tab1">
          <span className="numberCircle">1</span>
          <span>Customer Information</span>
        </label>

        <input id="tab2" type="radio" name="tabs" />
        <label htmlFor="tab2">
          <span className="numberCircle">2</span>
          <span>Shipping</span>
        </label>

        <input id="tab3" type="radio" name="tabs" />
        <label htmlFor="tab3">
          <span className="numberCircle">3</span>
          <span>Payment</span>
        </label>

        <section id="content1" className="tab-content">
          <h3>
            Customer Information{" "}
            <p>
              {activeuser} | {activeuserphone}
            </p>
          </h3>
          <p></p>
        </section>

        <section id="content2" className="tab-content">
          <h3>
            Shipping <p>Home :{Location}</p>
          </h3>
        </section>

        <section id="content3" className="tab-content">
          <h4 className="payment-title">Choose your payment method</h4>
          <form action="" method="post">
            <div className="pymt-radio">
              <div className="row-payment-method payment-row">
                <div className="select-icon">
                  <input type="radio" id="radio1" name="radios" value="pp" />
                  <label for="radio1"></label>
                </div>
                <div className="select-txt">
                  <p className="pymt-type-name">Paypal</p>
                  <p className="pymt-type-desc">
                    Safe payment online. Credit card needed. PayPal account is
                    not necessary.
                  </p>
                </div>
                <div className="select-logo">
                  <img
                    src="https://www.dropbox.com/s/pycofx0gngss4ef/logo-paypal.png?raw=1"
                    alt="PayPal"
                  />
                </div>
              </div>
            </div>
            <div className="pymt-radio">
              <div className="row-payment-method payment-row-last">
                <div className="select-icon hr">
                  <input
                    type="radio"
                    id="radio2"
                    name="radios"
                    value="pp"
                    checked
                  />
                  <label for="radio2"></label>
                </div>
                <div className="select-txt hr">
                  <p className="pymt-type-name">Credit Card</p>
                  <p className="pymt-type-desc">
                    Safe money transfer using your bank account. Safe payment
                    online. Credit card needed. Visa, Maestro, Discover,
                    American Express
                  </p>
                </div>
                <div className="select-logo">
                  <div className="select-logo-sub logo-spacer">
                    <img
                      src="https://www.dropbox.com/s/by52qpmkmcro92l/logo-visa.png?raw=1"
                      alt="Visa"
                    />
                  </div>
                  <div className="select-logo-sub">
                    <img
                      src="https://www.dropbox.com/s/6f5dorw54xomw7p/logo-mastercard.png?raw=1"
                      alt="MasterCard"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="form-cc">
              <div className="row-cc">
                <div className="cc-field">
                  <div className="cc-title">Credit Card Number</div>
                  <input
                    type="text"
                    className="input cc-txt text-validated"
                    value="4542 9931 9292 2293"
                  />
                </div>
              </div>
              <div className="row-cc">
                <div className="cc-field">
                  <div className="cc-title">Expiry Date</div>
                  <select className="input cc-ddl">
                    <option selected>01</option>
                    <option>02</option>
                    <option>03</option>
                    <option>04</option>
                    <option>05</option>
                    <option>06</option>
                    <option>07</option>
                    <option>08</option>
                    <option>09</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                  </select>
                  <select className="input cc-ddl">
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                    <option>04</option>
                    <option>05</option>
                    <option>06</option>
                    <option>07</option>
                    <option>08</option>
                    <option>09</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option selected>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                    <option>21</option>
                    <option>22</option>
                    <option>23</option>
                    <option>24</option>
                    <option>25</option>
                    <option>26</option>
                    <option>27</option>
                    <option>28</option>
                    <option>29</option>
                    <option>30</option>
                    <option>31</option>
                  </select>
                </div>
                <div className="cc-field">
                  <div className="cc-title">
                    CVV Code<span className="numberCircle">?</span>
                  </div>
                  <input type="text" className="input cc-txt" />
                </div>
              </div>
              <div className="row-cc">
                <div className="cc-field">
                  <div className="cc-title">Name on Card</div>
                  <input type="text" className="input cc-txt" />
                </div>
              </div>
            </div>
            <div className="button-master-container">
              <div className="button-container">
                <a href="/restarunts">Return to Restarunts</a>
              </div>
              <div className="button-container button-finish">
                <a href="/" onClick={handleCheckout}>
                  Pay &#x20B9; {total}
                </a>
              </div>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default Step;
