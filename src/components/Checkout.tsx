import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../contextApi/CartContext";
import "../css/Checkout.css";
import "../css/SweetAlert.css"

import {
  FaMapMarkerAlt,
  FaUser,
  FaPhone,
  FaMoneyBillWave,
  FaQrcode,
  FaTruck,
  FaCheckCircle,
} from "react-icons/fa";
import QRCode from "react-qr-code";
import { sendOrderEmail } from "../services/EmailService";
import { getAddressFromLocation } from "../apis/LocationApi";
import { OrderContext } from "../contextApi/OrderContext";
import Swal from "sweetalert2";

function Checkout() {
  const { cart, clearCart } = useContext(CartContext);

  const navigate = useNavigate();
  const location = useLocation();

  const {addOrder} = useContext(OrderContext);

  const {
    grandTotal = 0,
    discount = 0,
    finalAmount = 0,
    couponPercent = 0,
  } = location.state || {};

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [paymentMode, setPaymentMode] = useState("");

  const [errors, setErrors] = useState({
  name: "",
  mobile: "",
  email: "",
  address: "",
});


const validateField = (field: string, value: string) => {
  let error = "";

  switch (field) {
    case "name":
      if (!value.trim()) {
        error = "Name is required";
      } else if (!/^[A-Za-z ]+$/.test(value)) {
        error = "Only alphabets are allowed";
      }
      break;

    case "mobile":
      if (!/^[6-9]\d{9}$/.test(value)) {
        error = "Enter a valid 10-digit mobile number";
      }
      break;

    case "email":
      if (
        value &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
      ) {
        error = "Invalid email address";
      }
      break;

    case "address":
      if (value.trim().length < 10) {
        error = "Address should be at least 10 characters";
      }
      break;
  }

  setErrors((prev) => ({
    ...prev,
    [field]: error,
  }));
};

const orderData = {
      orderNumber: Math.floor(Math.random() * 100000),

      customerName: name,

      mobile: mobile,

      email: email,

      address: address,

      paymentMode: paymentMode,

      grandTotal: grandTotal,

      discount: discount,

      finalAmount: finalAmount,

      orderDate: new Date().toLocaleString(),

      status: "PLACED",

      items: [...cart],
    };

  const placeOrder = async () => {
    if (!name || !mobile || !address) {
      alert("Please fill all address details.");
      return;
    }
    if (!paymentMode) {
      alert("Please select a payment method.");
      return;
    }
    // alert("Order Placed Successfully!");

     

    //prepare the email information 
    // Map the template params & our Data.
   
  const order = {
      order_id: Math.floor(Math.random() * 100000),
      name: name,
      email: email, // Recipient email
	  
      orders: cart.map((item) => ({
        name: item.name,
        units: item.quantity,
        price: item.price,
        image_url: item.imageUrl,
      })),

      cost: {
        shipping: 100,
        tax: 100,
        coupon: discount,
        total: finalAmount,
      },
    };
    
   
  await sendOrderEmail(order);

addOrder(orderData);

Swal.fire({
  icon: "success",
  title: "Order Placed Successfully",
  html: `
      <p>Thank you for shopping with <b>FreshMart</b>.</p>

      <div class="order-id-box">
          <span>Order Number</span>
          <h3>#${orderData.orderNumber}</h3>
      </div>

      <p>You can track your order anytime from <b>My Orders</b>.</p>
  `,
  customClass:{
      popup:"fm-popup",
      title:"fm-title",
      confirmButton:"fm-confirm",
      cancelButton:"fm-cancel"
  },
  buttonsStyling:false,
  showCancelButton:true,
  confirmButtonText:"Track Order",
  cancelButtonText:"Continue Shopping",
  timer:5000,
  timerProgressBar:true
}).then((result)=>{

    if(result.isConfirmed){
        navigate("/orders");
    }

    if(result.dismiss===Swal.DismissReason.timer){
        navigate("/orders");
    }

});

clearCart();

  };

    const getCurrentLocation = () => {
  if (!navigator.geolocation) {
    alert("Geolocation is not supported.");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      try {
        const data = await getAddressFromLocation(lat, lng);

        setAddress(data.display_name);
      } catch (error) {
        alert("Unable to fetch address.");
      }
    },
    (error) => {
      alert(error.message);
    }
  );
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
                  onChange={(e) =>{
                    setName(e.target.value);
                    validateField("name", e.target.value);
                  }}
                />

              </div>

              {errors.name && (
                <span className="error-text">{errors.name}</span>
              )}

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
                  onChange={(e) =>{
                    setMobile(e.target.value);
                    validateField("mobile", e.target.value);
                  }}
                />

              </div>

            </div>

            {errors.mobile && (
                <span className="error-text">{errors.mobile}</span>
            )}

            <div className="input-group">

              <label>
                Customer Email
              </label>

              <div className="input-box">

                <FaUser />

                <input
                  type="text"
                  placeholder="Enter your email id"
                  value={email}
                  onChange={(e) =>{
                    setEmail(e.target.value);
                    validateField("email", e.target.value);
                  }}
                />

              </div>

            </div>

            {errors.email && (
                <span className="error-text">{errors.email}</span>
             )}

            <button
    type="button"
    onClick={getCurrentLocation}
    className="location-btn"
  >
    <FaMapMarkerAlt />
    Use Current Location
  </button>

            <div className="input-group">

              <label>
                Delivery Address
              </label>

              <textarea
                rows={5}
                placeholder="Enter complete delivery address..."
                value={address}
                onChange={(e) =>{
                  setAddress(e.target.value);
                  validateField("address", e.target.value);
                }}
              />

            </div>

            {errors.address && (
                <span className="error-text">{errors.address}</span>
              )}

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

                {paymentMode === "UPI" && (
              <div className="qr-section">

                  <h4>Scan UPI QR to Pay ₹{finalAmount.toFixed(2)}</h4>

                  <QRCode
                     value={`upi://pay?pa=9908129796@ybl&pn=FreshMart&am=${finalAmount.toFixed(2)}&cu=INR`}
                  />

                   <p>UPI ID: 9908129796@ybl</p>
                   </div>
            )}

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