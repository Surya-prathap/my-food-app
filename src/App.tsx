import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./Home";
import VegItems from "./VegItems";
import NonVeg from "./NonVeg";
import Milk from "./Milk";
import { LuHouse, LuMilk, LuShoppingCart, LuUserPlus } from "react-icons/lu";
import { PiCarrotBold } from "react-icons/pi";
import { GiChickenOven } from "react-icons/gi";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./components/Register";
import Login from "./components/Login";
import { useContext } from "react";
import { CartContext } from "./contextApi/CartContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";


function App() {

  let {cart} = useContext(CartContext);

  return (
    <BrowserRouter>
      <div className="app-container">

        <nav className="navbar">

  <NavLink className="nav-link" to="/">
    <LuHouse size={26}/>
    <span>Home</span>
  </NavLink>

  <NavLink className="nav-link" to="/veg-items">
    <PiCarrotBold size={26}/>
    <span>Veg Items</span>
  </NavLink>

  <NavLink className="nav-link" to="/non-veg-items">
    <GiChickenOven size={26}/>
    <span>Non Veg Items</span>
  </NavLink>

  <NavLink className="nav-link" to="/milk-items">
    <LuMilk size={26}/>
    <span>Milk Items</span>
  </NavLink>

  <NavLink className="nav-link cart-link" to="/cart">
    <LuShoppingCart size={26}/>
    <span>Cart</span>

    <div className="cart-count">
      {cart.length}
    </div>
  </NavLink>

  <NavLink className="nav-link" to="/register">
  <LuUserPlus size={26}/>
    <span>Register</span>
  </NavLink>

</nav>

        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/veg-items" element={<VegItems />} />
            <Route path="/non-veg-items" element={<NonVeg />} />
            <Route path="/milk-items" element={<Milk />} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/checkout" element={<Checkout/>} />


          </Routes>
        </div>

        <ToastContainer
            position="top-right"
            autoClose={2500}
            toastStyle={{
                borderRadius: "16px",
                fontSize: "15px"
            }}
        />

      </div>
    </BrowserRouter>
  );
}

export default App;