import { useContext, useRef, useState } from "react";
import "../css/Cart.css";
import { CartContext } from "../contextApi/CartContext";
import { coupons } from "../data/Coupons";

import {
  FaShoppingCart,
  FaTag,
  FaMoneyBillWave,
  FaCheckCircle,
} from "react-icons/fa";
import { FiMinus,FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { LuShieldCheck, LuTrash2, LuTruck } from "react-icons/lu";

function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useContext(CartContext);

  const couponRef = useRef<HTMLInputElement>(null);

  const [couponPercent, setCouponPercent] = useState(0);
  const [message, setMessage] = useState("");

  const grandTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const applyCoupon = () => {
    const code = couponRef.current?.value.trim() || "";

    const coupon = coupons.find(
      (item) => item.code.toUpperCase() === code.toUpperCase()
    );

    if (coupon) {
      setCouponPercent(coupon.discount);
      setMessage(`Coupon Applied (${coupon.discount}% OFF)`);
    } else {
      setCouponPercent(0);
      setMessage("Invalid Coupon Code");
    }
  };

  const discount = (grandTotal * couponPercent) / 100;
  const finalAmount = grandTotal - discount;

  let navigate = useNavigate();

  return (
    <div className="cart-page">

      <div className="cart-header">
        <FaShoppingCart />
        <h1>Shopping Cart</h1>
      </div>

      {cart.length === 0 ? (

        <div className="empty-cart">
          <FaShoppingCart className="empty-icon" />
          <h2>Your Cart is Empty</h2>
      <p>
        Looks like your basket is empty.
        Browse our fresh collection and start shopping.
       </p>

       <button
           className="continue-btn"
          onClick={() => navigate("/")}
        >
        Continue Shopping
        </button>
        </div>

      ) : (

        <div className="cart-container">

          {/* Left */}

          <div className="cart-items">

            {cart.map((item) => (

              <div className="cart-card" key={item.id}>

                <div className="image-box">
                  <img
                    src={item.imageUrl}
                    alt={item.description}
                  />
                </div>

                <div className="item-details">

                  <h2>{item.name}</h2>

                  <p className="price">
                    ₹{item.price}
                  </p>

                  <p className="subtotal">
                    Total :
                    <span>
                      ₹{item.price * item.quantity}
                    </span>
                  </p>

                </div>

                <div className="item-actions">

                  <div className="quantity-box">

                    <button
                      onClick={() =>
                        decreaseQuantity(item.id)
                      }
                    >
                      <FiMinus />
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        increaseQuantity(item.id)
                      }
                    >
                      <FiPlus />
                    </button>

                  </div>

                  <button
                    className="remove-btn"
                    onClick={() =>
                      removeFromCart(item.id)
                    }
                  >
                    <LuTrash2/>
                    Remove
                  </button>

                </div>

              </div>

            ))}

          </div>

          {/* Right */}

          <div className="summary-card">

            <h2>
              Order Overview
            </h2>

            <div className="coupon-box">

              <div className="coupon-title">
                <FaTag />
                <span>Coupon</span>
              </div>

              <div className="coupon-input">

                <input
                  ref={couponRef}
                  placeholder="Enter promo code"
                />

                <button
                  onClick={applyCoupon}
                >
                  Apply
                </button>

              </div>

              {message && (
                <p
                  className={
                    couponPercent > 0
                      ? "success-msg"
                      : "error-msg"
                  }
                >
                  {message}
                </p>
              )}

            </div>

            <div className="summary-row">

              <span>
                <FaMoneyBillWave />
                Grand Total
              </span>

              <strong>
                ₹{grandTotal.toFixed(2)}
              </strong>

            </div>

            <div className="summary-row">

              <span>
                <FaTag />
                Discount
              </span>

              <strong className="discount">
                -₹{discount.toFixed(2)}
              </strong>

            </div>

            <div className="summary-row">

              <span>
                <LuTruck />
                Delivery
              </span>

              <strong className="free">
                FREE
              </strong>

            </div>

            <div className="summary-total">

              <span>
                <FaCheckCircle />
                Payable
              </span>

              <h3>
                ₹{finalAmount.toFixed(2)}
              </h3>

            </div>

            <div className="secure-box">

              <p>
                <LuShieldCheck />
                Encrypted & Secure Payments
              </p>

              <p>
                <LuTruck />
                Same Day Fresh Delivery
              </p>

            </div>

            <button onClick={() => 
              navigate("/checkout",{
                state:{
                grandTotal,
                discount,
                finalAmount,
                couponPercent,
                }
              })
            }
            className="checkout-btn">
              Continue to Checkout
            </button>

          </div>

        </div>

      )}

    </div>
  );
}

export default Cart;