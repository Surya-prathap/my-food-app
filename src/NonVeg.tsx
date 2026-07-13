import { GiChickenOven } from "react-icons/gi";
import "./NonVeg.css";
import { toast } from "react-toastify";
import type { Product } from "./interfaces/Product";
import { useContext } from "react";
import { CartContext } from "./contextApi/CartContext";
import { useNavigate } from "react-router-dom";


function NonVeg() {

  let {addToCart} = useContext(CartContext);
  const navigate = useNavigate();

  const nonVegItems: Product[] = [
    { id: 11, name: "Chicken", imageUrl: "images/nonveg/chicken.webp", price: 280, description: "Fresh farm chicken" },
    { id: 12, name: "Eggs", imageUrl: "images/nonveg/eggs.png", price: 90, description: "Fresh farm eggs" },
    { id: 13, name: "Duck", imageUrl: "images/nonveg/duck.png", price: 380, description: "Fresh country duck" },
    
    { id: 14, name: "Fish", imageUrl: "images/nonveg/fish.png", price: 320, description: "Fresh river fish" },
    { id: 15, name: "Mutton", imageUrl: "images/nonveg/mutton.png", price: 780, description: "Premium fresh mutton" },
    { id: 16, name: "Prawns", imageUrl: "images/nonveg/prawns.png", price: 620, description: "Fresh jumbo prawns" },
    { id: 17, name: "Crab", imageUrl: "images/nonveg/crab.webp", price: 450, description: "Fresh sea crab" },
    { id: 18, name: "Sardines", imageUrl: "images/nonveg/sardines.webp", price: 260, description: "Fresh sardines" },
    { id: 19, name: "Squid", imageUrl: "images/nonveg/squid.png", price: 540, description: "Fresh squid" },
    { id: 20, name: "Turkey", imageUrl: "images/nonveg/turkey.png", price: 420, description: "Fresh turkey meat" },
  ];

  return (
    <div className="nonveg-page">
      <h1 className="nonveg-heading"><GiChickenOven className="nonveg-heading-icon"/>Premium Non-Veg Collection</h1>

      <ul className="nonveg-container">
        {nonVegItems.map((item) => (
          <li key={item.id} className="nonveg-card">
            <img
              src={item.imageUrl}
              alt={item.name}
              className="nonveg-image"
            />

            <h3 className="nonveg-name">{item.name}</h3>

            <p className="nonveg-description">
              {item.description}
            </p>

            <div className="nonveg-footer">
              <span className="nonveg-price">
                ₹{item.price}/kg
              </span>

              <button
  onClick={() => {
    const loggedInUser = JSON.parse(
      localStorage.getItem("loggedInUser") || "null"
    );

    if (!loggedInUser) {
      toast.warning("Please login first!");

      setTimeout(() => {
        navigate("/login");
      }, 1500);

      return;
    }

    toast.success(`${item.name} Added Successfully`);
    addToCart(item);
  }}
  className="nonveg-btn"
>
  Add Cart
</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NonVeg;