import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../contextApi/CartContext";
import "../css/Checkout.css";

import {
  FaMapMarkerAlt,
  FaUser,
  FaPhone,
  FaMoneyBillWave,
  FaQrcode,
  FaTruck,
  FaCheckCircle,
} from "react-icons/fa";

function Checkout() {
  const { cart, clearCart } = useContext(CartContext);

  const navigate = useNavigate();
  const location = useLocation();

  const {
    grandTotal = 0,
    discount = 0,
    finalAmount = 0,
    couponPercent = 0,
  } = location.state || {};

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMode, setPaymentMode] = useState("");

  const placeOrder = () => {
    if (!name || !mobile || !address) {
      alert("Please fill all address details.");
      return;
    }

    if (!paymentMode) {
      alert("Please select a payment method.");
      return;
    }

    alert("Order Placed Successfully!");

    clearCart();

    navigate("/cart");
  };

  return (
    <div className="checkout-page">

      <div className="checkout-header">

        <span className="checkout-tag">
          SECURE CHECKOUT
        </span>

        <h1>
          Complete Your Order
        </h1>

        <p>
          Enter your delivery details, choose your preferred
          payment method and confirm your order.
        </p>

      </div>

      <div className="checkout-layout">

        {/* ===========================
              LEFT SECTION
        =========================== */}

        <div className="checkout-left">

          {/* Delivery Address */}

          <section className="checkout-card">

            <div className="section-title">

              <FaMapMarkerAlt />

              <h2>
                Delivery Address
              </h2>

            </div>

            <div className="input-group">

              <label>
                Customer Name
              </label>

              <div className="input-box">

                <FaUser />

                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                />

              </div>

            </div>

            <div className="input-group">

              <label>
                Mobile Number
              </label>

              <div className="input-box">

                <FaPhone />

                <input
                  type="text"
                  placeholder="Enter mobile number"
                  value={mobile}
                  onChange={(e) =>
                    setMobile(e.target.value)
                  }
                />

              </div>

            </div>

            <div className="input-group">

              <label>
                Delivery Address
              </label>

              <textarea
                rows={5}
                placeholder="Enter complete delivery address..."
                value={address}
                onChange={(e) =>
                  setAddress(e.target.value)
                }
              />

            </div>

          </section>

          {/* Payment Section */}

          <section className="checkout-card">

            <div className="section-title">

              <FaMoneyBillWave />

              <h2>
                Payment Method
              </h2>

            </div>

            <label className="payment-option">

              <input
                type="radio"
                value="UPI"
                checked={paymentMode === "UPI"}
                onChange={(e) =>
                  setPaymentMode(e.target.value)
                }
              />

              <div className="payment-content">

                <FaQrcode className="payment-icon upi" />

                <div>

                  <h3>
                    UPI Payment
                  </h3>

                  <p>
                    Google Pay, PhonePe, Paytm & more
                  </p>

                </div>

              </div>

            </label>

            <label className="payment-option">

              <input
                type="radio"
                value="COD"
                checked={paymentMode === "COD"}
                onChange={(e) =>
                  setPaymentMode(e.target.value)
                }
              />

              <div className="payment-content">

                <FaTruck className="payment-icon cod" />

                <div>

                  <h3>
                    Cash On Delivery
                  </h3>

                  <p>
                    Pay when your order arrives
                  </p>

                </div>

              </div>

            </label>

                        {/* Payment Details */}

            {paymentMode === "UPI" && (

              <div className="payment-info">

                <img
                  src="/images/qr.png"
                  alt="UPI QR Code"
                  className="upi-qr"
                />

                <h3>
                  Scan & Pay
                </h3>

                <p>
                  Use Google Pay, PhonePe, Paytm or any UPI
                  application to complete your payment.
                </p>

              </div>

            )}

            {paymentMode === "COD" && (

              <div className="payment-info cod-info">

                <FaTruck className="cod-large-icon" />

                <h3>
                  Cash On Delivery
                </h3>

                <p>
                  Your payment will be collected by the
                  delivery executive when your order reaches
                  your doorstep.
                </p>

              </div>

            )}

          </section>

        </div>

        {/* ===========================
              ORDER SUMMARY
        =========================== */}

        <aside className="summary-card">

          <h2>
            Order Summary
          </h2>

          <div className="summary-row">

            <span>
              Total Items
            </span>

            <strong>
              {cart.length}
            </strong>

          </div>

          <div className="summary-row">

            <span>
              Grand Total
            </span>

            <strong>
              ₹{grandTotal.toFixed(2)}
            </strong>

          </div>

          <div className="summary-row">

            <span>
              Coupon ({couponPercent}%)
            </span>

            <strong className="discount">

              -₹{discount.toFixed(2)}

            </strong>

          </div>

          <hr />

          <div className="summary-total">

            <span>
              Total Payable
            </span>

            <span>
              ₹{finalAmount.toFixed(2)}
            </span>

          </div>

          <button
            className="place-order-btn"
            onClick={placeOrder}
          >

            <FaCheckCircle />

            Place Order

          </button>

          <div className="secure-box">

            <FaCheckCircle />

            <p>

              Your order is protected with secure
              checkout and trusted payment methods.

            </p>

          </div>

        </aside>

      </div>

    </div>

  );

}

export default Checkout;