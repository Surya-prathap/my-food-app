import { LuMilk } from "react-icons/lu";
import "./Milk.css";
import { toast } from "react-toastify";
import type { Product } from "./interfaces/Product";
import { useContext } from "react";
import { CartContext } from "./contextApi/CartContext";
import { useNavigate } from "react-router-dom";


function Milk() {

  let {addToCart} = useContext(CartContext);
  const navigate = useNavigate();

  const milkItems: Product[] = [
    {
      id: 21,
      name: "Butter Milk",
      imageUrl: "images/milk/butter-milk.png",
      price: 30,
      description: "Refreshing and healthy butter milk."
    },
    {
      id: 22,
      name: "Butter",
      imageUrl: "images/milk/butter.webp",
      price: 60,
      description: "Creamy and delicious fresh butter."
    },
    {
      id: 23,
      name: "Cheese",
      imageUrl: "images/milk/cheese.webp",
      price: 120,
      description: "Premium quality cheese for every meal."
    },
    {
      id: 24,
      name: "Cream",
      imageUrl: "images/milk/cream.png",
      price: 70,
      description: "Fresh dairy cream with rich texture."
    },
    {
      id: 25,
      name: "Curd",
      imageUrl: "images/milk/curd.webp",
      price: 40,
      description: "Healthy and probiotic rich curd."
    },
    {
      id: 26,
      name: "Ghee",
      imageUrl: "images/milk/ghee.png",
      price: 250,
      description: "Pure and aromatic cow ghee."
    },
    {
      id: 27,
      name: "Ice Cream",
      imageUrl: "images/milk/ice-cream.png",
      price: 90,
      description: "Delicious frozen dairy dessert."
    },
    {
      id: 28,
      name: "Milk",
      imageUrl: "images/milk/milk.webp",
      price: 32,
      description: "Fresh and nutritious milk."
    },
    {
      id: 29,
      name: "Paneer",
      imageUrl: "images/milk/paneer.webp",
      price: 95,
      description: "Soft and fresh paneer cubes."
    },
    {
      id: 30,
      name: "Yogurt",
      imageUrl: "images/milk/yogurt.png",
      price: 45,
      description: "Healthy and creamy yogurt."
    }
  ];

  return (
    <div className="milk-page">
      <h1 className="milk-heading"><LuMilk className="milk-heading-icon"/>Premium Dairy Collection</h1>

      <ul className="milk-container">
        {milkItems.map((milkItem) => (
          <li key={milkItem.id} className="milk-card">
            <img
              src={milkItem.imageUrl}
              alt={milkItem.name}
              className="milk-image"
            />

            <h3 className="milk-name">{milkItem.name}</h3>

            <p className="milk-description">
              {milkItem.description}
            </p>

            <div className="milk-footer">
              <span className="milk-price">
                ₹{milkItem.price}
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

    toast.success(`${milkItem.name} Added Successfully`);
    addToCart(milkItem);
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

export default Milk;