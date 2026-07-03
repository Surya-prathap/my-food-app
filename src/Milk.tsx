import { LuMilk } from "react-icons/lu";
import "./Milk.css";

interface MilkItem {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  description: string;
}

function Milk() {
  const milkItems: MilkItem[] = [
    {
      id: 1,
      name: "Butter Milk",
      imageUrl: "images/milk/butter-milk.png",
      price: 30,
      description: "Refreshing and healthy butter milk."
    },
    {
      id: 2,
      name: "Butter",
      imageUrl: "images/milk/butter.webp",
      price: 60,
      description: "Creamy and delicious fresh butter."
    },
    {
      id: 3,
      name: "Cheese",
      imageUrl: "images/milk/cheese.webp",
      price: 120,
      description: "Premium quality cheese for every meal."
    },
    {
      id: 4,
      name: "Cream",
      imageUrl: "images/milk/cream.png",
      price: 70,
      description: "Fresh dairy cream with rich texture."
    },
    {
      id: 5,
      name: "Curd",
      imageUrl: "images/milk/curd.webp",
      price: 40,
      description: "Healthy and probiotic rich curd."
    },
    {
      id: 6,
      name: "Ghee",
      imageUrl: "images/milk/ghee.png",
      price: 250,
      description: "Pure and aromatic cow ghee."
    },
    {
      id: 7,
      name: "Ice Cream",
      imageUrl: "images/milk/ice-cream.png",
      price: 90,
      description: "Delicious frozen dairy dessert."
    },
    {
      id: 8,
      name: "Milk",
      imageUrl: "images/milk/milk.webp",
      price: 32,
      description: "Fresh and nutritious milk."
    },
    {
      id: 9,
      name: "Paneer",
      imageUrl: "images/milk/paneer.webp",
      price: 95,
      description: "Soft and fresh paneer cubes."
    },
    {
      id: 10,
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

              <button className="milk-btn">
                Add to Cart
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Milk;