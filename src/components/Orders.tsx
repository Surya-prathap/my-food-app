import { useContext, useState } from "react";
import "../css/Orders.css";
import { OrderContext } from "../contextApi/OrderContext";

import {
  FaCalendarAlt,
  FaCheckCircle,
  FaShoppingBag,
  FaUser,
  FaPhone,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaCreditCard,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

function Orders() {
  const { orders } = useContext(OrderContext);

  const [expandedOrder, setExpandedOrder] = useState<number | null>(null);

  const toggleOrder = (orderNumber: number) => {
    setExpandedOrder((prev) =>
      prev === orderNumber ? null : orderNumber
    );
  };

  if (orders.length === 0) {
    return (
      <div className="orders-empty">
        <h1>No Orders Found</h1>
      </div>
    );
  }

  return (
    <section className="orders-page">

      <div className="orders-container">

        <h1 className="orders-title">
          My Orders
        </h1>

        {orders.map((order) => (

          <div
            className="order-card"
            key={order.orderNumber}
          >

            {/* Header */}

            <div
              className="order-header"
              onClick={() => toggleOrder(order.orderNumber)}
            >

              <div className="order-header-left">

                <h2>
                  Order #{order.orderNumber}
                </h2>

                <p className="order-date">

                  <FaCalendarAlt />

                  <span>
                    {order.orderDate}
                  </span>

                </p>

              </div>

              <div className="order-header-right">

                <div className="order-status">

                  <FaCheckCircle />

                  <span>
                    {order.status}
                  </span>

                </div>

                <div className="order-arrow">

                  {expandedOrder === order.orderNumber ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}

                </div>

              </div>

            </div>

            {/* Expandable Content */}

            {expandedOrder === order.orderNumber && (

              <div className="order-content">

                {/* Left Side */}

                <div className="ordered-products">

                  <h3>

                    <FaShoppingBag />

                    Ordered Products

                  </h3>

                  <div className="product-list">

                    {order.items.map((item) => (

                      <div
                        className="ordered-product-card"
                        key={item.id}
                      >

                        <div className="ordered-product-image">

                          <img
                            src={item.imageUrl}
                            alt={item.description}
                          />

                        </div>

                        <div className="ordered-product-info">

                          <h4>
                            {item.description}
                          </h4>

                          <p>
                            Quantity :
                            <span>
                              {" "}
                              {item.quantity}
                            </span>
                          </p>

                        </div>

                        <div className="ordered-product-price">
                          ₹{item.price}
                        </div>

                      </div>

                    ))}

                  </div>

                </div>


                                {/* Right Side */}

                <div className="order-details">

                  <h3>Order Details</h3>

                  <div className="details-list">

                    <div className="detail-item">
                      <FaUser className="detail-icon user-icon" />
                      <span>{order.customerName}</span>
                    </div>

                    <div className="detail-item">
                      <FaPhone className="detail-icon phone-icon" />
                      <span>{order.mobile}</span>
                    </div>

                    <div className="detail-item address-item">
                      <FaMapMarkerAlt className="detail-icon location-icon" />
                      <span>{order.address}</span>
                    </div>

                    <div className="detail-item">
                      <FaCreditCard className="detail-icon payment-icon" />
                      <span>{order.paymentMode}</span>
                    </div>

                    <div className="details-divider"></div>

                    <div className="price-row">
                      <span>Grand Total</span>
                      <span>₹{order.grandTotal}</span>
                    </div>

                    <div className="price-row discount-row">
                      <span>Discount</span>
                      <span>- ₹{order.discount}</span>
                    </div>

                    <div className="final-amount">

                      <div className="payable-label">

                        <FaMoneyBillWave />

                        <span>Payable</span>

                      </div>

                      <div className="payable-price">
                        ₹{order.finalAmount}
                      </div>

                    </div>

                  </div>

                </div>

              </div>

            )}

          </div>

        ))}

      </div>

    </section>
  );
}

export default Orders;