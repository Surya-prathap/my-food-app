import { useNavigate } from "react-router-dom";
import "./Home.css";

import { PiCarrotBold } from "react-icons/pi";
import { GiChickenOven } from "react-icons/gi";
import { LuMilk } from "react-icons/lu";
import {
  FaArrowRight,
  FaLeaf,
  FaClock,
  FaAward,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

import {
  MdLocationOn,
  MdPhone,
  MdEmail,
} from "react-icons/md";

function Home() {

  const navigate = useNavigate();

  return (

    <div className="home-container">


      {/* =======================================
            BRAND HEADER
======================================= */}

<section className="brand-header">

  <div className="brand-content">

    <span className="brand-tagline">
      PREMIUM ONLINE GROCERY STORE
    </span>

    <h1 className="brand-name">
    FreshMart Market
</h1>

<h2 className="brand-title">
    Freshness Curated.
    <span> Every Basket Elevated.</span>
</h2>

<p className="brand-subtitle">
    Experience a modern grocery destination where farm-fresh vegetables,
    premium meat, dairy essentials and everyday groceries come together
    with exceptional quality and convenience.
</p>

  </div>

</section>

      {/* =======================================
                  HERO
      ======================================= */}

      <section className="hero-section">

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <span className="hero-tag">
            <FaLeaf />
            Everyday Fresh • Everyday Better
          </span>

          <h1 className="hero-title">
            Fresh groceries,
            thoughtfully chosen for
            every kitchen.
          </h1>

          <p className="hero-description">

            FreshMart brings together carefully selected
            vegetables, premium meat, dairy essentials and
            everyday groceries in one place, making shopping
            simple, convenient and reliable.

          </p>

          <button
            className="shop-btn"
            onClick={() => navigate("/veg-items")}
          >
            Explore Collection

            <FaArrowRight />
          </button>

        </div>

      </section>

      {/* =======================================
                CATEGORY SECTION
      ======================================= */}

      <section className="categories-section">

        <div
          className="category-card veg-card-home"
          onClick={() => navigate("/veg-items")}
        >

          <div className="category-icon">
            <PiCarrotBold />
          </div>

          <h2>
            Fresh Vegetables
          </h2>

          <p>

            Handpicked vegetables sourced
            directly from trusted farms,
            delivering freshness every day.

          </p>

        </div>

        <div
          className="category-card nonveg-card-home"
          onClick={() => navigate("/non-veg-items")}
        >

          <div className="category-icon">
            <GiChickenOven />
          </div>

          <h2>
            Meat & Seafood
          </h2>

          <p>

            Premium quality meat and seafood,
            hygienically processed and packed
            with extra care.

          </p>

        </div>

        <div
          className="category-card milk-card-home"
          onClick={() => navigate("/milk-items")}
        >

          <div className="category-icon">
            <LuMilk />
          </div>

          <h2>
            Dairy Essentials
          </h2>

          <p>

            Fresh milk, butter, cheese and
            everyday dairy products for
            every family.

          </p>

        </div>

      </section>

      {/* =======================================
            BRAND MESSAGE
      ======================================= */}

      <section className="story-section">

        <div className="story-left">

          <span className="story-small">
            OUR PROMISE
          </span>

          <h2>

            Grocery shopping
            should feel fresh,
            simple and stress-free.

          </h2>

        </div>

        <div className="story-right">

          <p>

            We believe quality groceries shouldn't
            require long queues or complicated
            shopping experiences. FreshMart is built
            to make everyday shopping quick,
            transparent and enjoyable while bringing
            carefully selected products straight to
            your doorstep.

          </p>

        </div>

      </section>

            {/* =======================================
                WHY FRESHMART
      ======================================= */}

      <section className="highlights-section">

        <div className="highlight-item">

          <FaLeaf className="highlight-icon" />

          <div>

            <h3>Fresh Every Morning</h3>

            <p>
              Carefully selected produce sourced
              from trusted local farms.
            </p>

          </div>

        </div>

        <div className="highlight-item">

          <FaClock className="highlight-icon" />

          <div>

            <h3>Quick Shopping</h3>

            <p>
              Find everyday essentials quickly
              with a clean and simple shopping experience.
            </p>

          </div>

        </div>

        <div className="highlight-item">

          <FaAward className="highlight-icon" />

          <div>

            <h3>Quality Checked</h3>

            <p>
              Every product is selected to deliver
              freshness, hygiene and consistent quality.
            </p>

          </div>

        </div>

      </section>

      {/* =======================================
                QUOTE SECTION
      ======================================= */}

      <section className="quote-section">

        <span className="quote-line"></span>

        <h2>

          Freshness isn't something we advertise.
          <br />
          It's something you'll notice with every order.

        </h2>

        <p>

          From seasonal vegetables to dairy essentials and
          premium meat, every product is chosen to make
          everyday grocery shopping simpler, faster and
          more enjoyable.

        </p>

      </section>

      {/* =======================================
                CTA
      ======================================= */}

      <section className="cta-section">

        <div className="cta-content">

          <h2>

            Ready to fill your basket
            with fresh essentials?

          </h2>

          <p>

            Discover quality groceries, thoughtfully
            selected and delivered with care.

          </p>

        </div>

        <button
          className="cta-btn"
          onClick={() => navigate("/veg-items")}
        >

          Start Shopping

          <FaArrowRight />

        </button>

      </section>

      {/* =======================================
                FOOTER
======================================= */}

<footer className="footer">

  <div className="footer-grid">

    {/* Company */}

    <div className="footer-column">

      <h2 className="footer-logo">
        FreshMart
      </h2>

      <p>

        FreshMart delivers carefully selected vegetables,
        premium meat, dairy essentials and daily groceries
        with quality, freshness and convenience at the heart
        of every order.

      </p>

    </div>

    {/* Categories */}

    <div className="footer-column">

      <h3>
        Categories
      </h3>

      <ul>

        <li onClick={() => navigate("/veg-items")}>
          Fresh Vegetables
        </li>

        <li onClick={() => navigate("/non-veg-items")}>
          Meat & Seafood
        </li>

        <li onClick={() => navigate("/milk-items")}>
          Dairy Essentials
        </li>

      </ul>

    </div>

    {/* Contact */}

    <div className="footer-column">

      <h3>
        Contact
      </h3>

      <div className="footer-contact">

        <p>
          <MdLocationOn />
          Hyderabad, Telangana
        </p>

        <p>
          <MdPhone />
          +91 98765 43210
        </p>

        <p>
          <MdEmail />
          support@freshmart.com
        </p>

      </div>

    </div>

    {/* Social */}

    <div className="footer-column">

      <h3>
        Follow Us
      </h3>

      <div className="social-icons">

        <span>
          <FaFacebookF />
        </span>

        <span>
          <FaInstagram />
        </span>

        <span>
          <FaTwitter />
        </span>

        <span>
          <FaLinkedinIn />
        </span>

      </div>

    </div>

  </div>

  <div className="footer-bottom">

    © 2026 FreshMart. Crafted with freshness for everyday living.

  </div>

</footer>

    </div>

  );

}

export default Home;
