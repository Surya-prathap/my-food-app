import { FcHome } from "react-icons/fc";
import "./VegItems.css";
import { PiCarrotBold } from "react-icons/pi";

interface VegItem {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  description: string;
}

function VegItems() {
  const vegItems: VegItem[] = [
    {
      id: 1,
      name: "Brinjal",
      imageUrl: "images/veg/brinjal.png",
      price: 30,
      description: "Fresh and healthy brinjals directly from farms."
    },
    {
      id: 2,
      name: "Cabbage",
      imageUrl: "images/veg/cabbage.png",
      price: 35,
      description: "Crispy and fresh cabbage rich in nutrients."
    },
    {
      id: 3,
      name: "Capsicum",
      imageUrl: "images/veg/capsicum.png",
      price: 50,
      description: "Premium quality capsicum with rich flavor."
    },
    {
      id: 4,
      name: "Carrot",
      imageUrl: "images/veg/carrot.webp",
      price: 40,
      description: "Sweet and juicy carrots full of vitamins."
    },
    {
      id: 5,
      name: "Cauliflower",
      imageUrl: "images/veg/cauliflower.webp",
      price: 45,
      description: "Farm fresh cauliflower for healthy meals."
    },
    {
      id: 6,
      name: "Cucumber",
      imageUrl: "images/veg/cucumber.png",
      price: 30,
      description: "Fresh cucumbers perfect for salads and snacks."
    },
    {
      id: 7,
      name: "Onion",
      imageUrl: "images/veg/onion.webp",
      price: 32,
      description: "Premium onions with rich taste and freshness."
    },
    {
      id: 8,
      name: "Potato",
      imageUrl: "images/veg/potato.png",
      price: 28,
      description: "Fresh potatoes suitable for all dishes."
    },
    {
      id: 9,
      name: "Spinach",
      imageUrl: "images/veg/spinach.png",
      price: 25,
      description: "Nutritious spinach packed with iron and minerals."
    },
    {
      id: 10,
      name: "Tomato",
      imageUrl: "images/veg/tomato.png",
      price: 38,
      description: "Fresh red tomatoes with natural sweetness."
    }
  ];

  return (
    <div className="veg-page">
      <h1 className="veg-heading"><PiCarrotBold className="veg-heading-icon"/> Fresh Vegetables</h1>

      <ul className="veg-container">
        {vegItems.map((veg) => (
          <li key={veg.id} className="veg-card">
            <img
              src={veg.imageUrl}
              alt={veg.name}
              className="veg-image"
            />

            <h3 className="veg-name">{veg.name}</h3>

            <p className="veg-description">
              {veg.description}
            </p>

            <div className="veg-footer">
              <span className="veg-price">
                ₹{veg.price}/kg
              </span>

              <button className="buy-btn">
                Add to Cart
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VegItems;