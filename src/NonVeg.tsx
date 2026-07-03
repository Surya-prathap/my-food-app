import { GiMeat } from "react-icons/gi";
import "./NonVeg.css";

interface NonVegItem {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  description: string;
}

function NonVeg() {
  const nonVegItems: NonVegItem[] = [
    { id: 1, name: "Chicken", imageUrl: "images/nonveg/chicken.webp", price: 280, description: "Fresh farm chicken" },
    { id: 2, name: "Crab", imageUrl: "images/nonveg/crab.webp", price: 450, description: "Fresh sea crab" },
    { id: 3, name: "Duck", imageUrl: "images/nonveg/duck.png", price: 380, description: "Fresh country duck" },
    { id: 4, name: "Eggs", imageUrl: "images/nonveg/eggs.png", price: 90, description: "Fresh farm eggs" },
    { id: 5, name: "Fish", imageUrl: "images/nonveg/fish.png", price: 320, description: "Fresh river fish" },
    { id: 6, name: "Mutton", imageUrl: "images/nonveg/mutton.png", price: 780, description: "Premium fresh mutton" },
    { id: 7, name: "Prawns", imageUrl: "images/nonveg/prawns.png", price: 620, description: "Fresh jumbo prawns" },
    { id: 8, name: "Sardines", imageUrl: "images/nonveg/sardines.webp", price: 260, description: "Fresh sardines" },
    { id: 9, name: "Squid", imageUrl: "images/nonveg/squid.png", price: 540, description: "Fresh squid" },
    { id: 10, name: "Turkey", imageUrl: "images/nonveg/turkey.png", price: 420, description: "Fresh turkey meat" },
  ];

  return (
    <div className="nonveg-page">
      <h1 className="nonveg-heading"><GiMeat className="nonveg-heading-icon"/>Premium Non-Veg Collection</h1>

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

              <button className="nonveg-btn">
                Add to Cart
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NonVeg;