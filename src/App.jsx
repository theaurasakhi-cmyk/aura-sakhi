import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import "./App.css";
import logo from "./assets/aura-sakhi-logo.png";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [showOrder, setShowOrder] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState(1);

  const price = 79;
  const deliveryCharge = 40;

  const productTotal = quantity * price;
  const finalTotal = productTotal + deliveryCharge;

  const upiId = "sonu.organizein@oksbi";

  // Dynamic UPI payment link
  // The amount automatically changes with quantity.
  const upiLink = `upi://pay?pa=${encodeURIComponent(
    upiId
  )}&pn=${encodeURIComponent(
    "Aura Sakhi"
  )}&am=${finalTotal}&cu=INR`;

  const whatsappNumber = "917892283963";

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const updateForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const openCheckout = () => {
    setCheckoutStep(1);
    setShowOrder(true);
  };

  const goToPayment = (e) => {
    e.preventDefault();
    setCheckoutStep(2);
  };

  const goBackToDetails = () => {
    setCheckoutStep(1);
  };

  const closeCheckout = () => {
    setShowOrder(false);
    setCheckoutStep(1);
  };

  const placeOrder = () => {
    const message = `Hello Aura Sakhi 🌿

I'd like to place an order.

Product: Sanitary Pad Disposal Bags
Quantity: ${quantity}
Product Total: ₹${productTotal}
Delivery: ₹${deliveryCharge}
Final Total: ₹${finalTotal}

Name: ${form.name}
Phone: ${form.phone}
Address: ${form.address}
City: ${form.city}
Pincode: ${form.pincode}

I have completed the UPI payment.

Thank you!`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  const scrollToProduct = () => {
    document
      .getElementById("shop")
      ?.scrollIntoView({ behavior: "smooth" });

    setMenuOpen(false);
  };

  return (
    <div className="site">

      {/* ================= NAVBAR ================= */}

      <header className="navbar">

        <a href="#home" className="logo">
          <img src={logo} alt="Aura Sakhi" />
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>

          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>

          <a
            href="#shop"
            onClick={() => setMenuOpen(false)}
          >
            Shop
          </a>

          <a
            href="#why"
            onClick={() => setMenuOpen(false)}
          >
            Why Aura Sakhi
          </a>

          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>

        </nav>

        <button
          className="nav-shop-button"
          onClick={scrollToProduct}
        >
          Shop Now
        </button>

      </header>


      {/* ================= HERO ================= */}

      <section className="hero" id="home">

        <div className="hero-left">

          <div className="eyebrow">
            EVERYDAY CARE • MADE THOUGHTFUL
          </div>

          <h1>
            One small thing
            <br />
            that makes periods
            <br />
            <em>a little easier.</em>
          </h1>

          <p className="hero-description">
            Discreet sanitary pad disposal bags designed
            for everyday life, college, work and travel.
          </p>

          <div className="hero-actions">

            <button
              className="main-button"
              onClick={scrollToProduct}
            >
              Shop for ₹79
            </button>

            <span className="no-pressure">
              Simple ordering • No account needed
            </span>

          </div>

          <div className="trust-row">

            <div>
              <strong>₹79</strong>
              <span>Simple price</span>
            </div>

            <div>
              <strong>Easy</strong>
              <span>To carry</span>
            </div>

            <div>
              <strong>Private</strong>
              <span>Discreet use</span>
            </div>

          </div>

        </div>


        <div className="hero-product">

          <div className="product-card">

            <div className="product-image-area">

              <div className="pack-placeholder">

                <span>AURA SAKHI</span>

                <strong>
                  PAD
                  <br />
                  DISPOSAL
                  <br />
                  BAGS
                </strong>

                <small>
                  Thoughtful care,
                  <br />
                  wherever you are.
                </small>

              </div>

            </div>

            <div className="floating-price">
              ₹79
            </div>

          </div>

          <p className="product-undertext">
            Your everyday period-care essential.
          </p>

        </div>

      </section>


      {/* ================= BENEFITS ================= */}

      <section className="benefits">

        <div className="benefit">

          <div className="benefit-icon">
            ♡
          </div>

          <div>
            <strong>Discreet</strong>
            <p>For a little more privacy.</p>
          </div>

        </div>


        <div className="benefit">

          <div className="benefit-icon">
            +
          </div>

          <div>
            <strong>Practical</strong>
            <p>Made for real everyday moments.</p>
          </div>

        </div>


        <div className="benefit">

          <div className="benefit-icon">
            ↗
          </div>

          <div>
            <strong>Travel friendly</strong>
            <p>Easy to keep in your bag.</p>
          </div>

        </div>


        <div className="benefit">

          <div className="benefit-icon">
            ✓
          </div>

          <div>
            <strong>Simple to order</strong>
            <p>No complicated checkout.</p>
          </div>

        </div>

      </section>


      {/* ================= SHOP ================= */}

      <section className="shop-section" id="shop">

        <div className="shop-heading">

          <div>

            <p className="section-label">
              SHOP AURA SAKHI
            </p>

            <h2>
              Start with one
              <br />
              thoughtful essential.
            </h2>

          </div>

          <p>
            We are starting small — with something
            women often need but rarely think about
            until the moment arrives.
          </p>

        </div>


        <div className="shop-product">

          <div className="large-product-image">

            <div className="product-pack-large">

              <span>AURA SAKHI</span>

              <h3>
                Sanitary Pad
                <br />
                Disposal Bags
              </h3>

              <p>
                CARE FOR EVERYDAY MOMENTS
              </p>

            </div>

          </div>


          <div className="shop-product-info">

            <div className="rating-line">
              <span>FIRST ESSENTIAL</span>
            </div>

            <h3>
              Sanitary Pad Disposal Bags
            </h3>

            <p className="shop-description">
              A simple, discreet way to wrap and
              dispose of used sanitary pads when
              you're at college, work, travelling
              or simply away from home.
            </p>


            <div className="mini-features">

              <span>✓ Discreet</span>
              <span>✓ Easy to carry</span>
              <span>✓ Simple to use</span>

            </div>


            <div className="buy-box">

              <div className="price-line">

                <div>
                  <small>PRICE</small>
                  <strong>₹79</strong>
                </div>

                <span>
                  per pack
                </span>

              </div>


              <div className="quantity-row">

                <span>Quantity</span>

                <div className="quantity">

                  <button
                    onClick={() =>
                      setQuantity(
                        Math.max(1, quantity - 1)
                      )
                    }
                  >
                    −
                  </button>

                  <strong>
                    {quantity}
                  </strong>

                  <button
                    onClick={() =>
                      setQuantity(quantity + 1)
                    }
                  >
                    +
                  </button>

                </div>

              </div>


              <div className="total-line">

                <span>
                  Product total
                </span>

                <strong>
                  ₹{productTotal}
                </strong>

              </div>


              <button
                className="place-order-button"
                onClick={openCheckout}
              >
                Proceed with Order
                <span>→</span>
              </button>


              <p className="checkout-note">
                No account • Simple checkout
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= WHY ================= */}

      <section className="why-section" id="why">

        <div className="why-title">

          <p className="section-label">
            WHY AURA SAKHI
          </p>

          <h2>
            Because the little
            <br />
            things matter too.
          </h2>

        </div>


        <div className="why-cards">

          <div className="why-card">

            <span>01</span>

            <h3>
              For your bag
            </h3>

            <p>
              Keep it with your everyday
              essentials so you're prepared
              when you need it.
            </p>

          </div>


          <div className="why-card">

            <span>02</span>

            <h3>
              For your privacy
            </h3>

            <p>
              A simple way to make disposal
              feel more discreet and comfortable.
            </p>

          </div>


          <div className="why-card">

            <span>03</span>

            <h3>
              For real life
            </h3>

            <p>
              College, office, travel,
              weekends — wherever your day goes.
            </p>

          </div>

        </div>

      </section>


      {/* ================= COMING SOON ================= */}

      <section className="coming-section">

        <p className="section-label">
          MORE TO COME
        </p>

        <h2>
          Aura Sakhi is
          <br />
          just getting started.
        </h2>

        <p>
          Thoughtful essentials for periods,
          travel, hygiene and everyday women's care.
        </p>


        <div className="coming-grid">

          <div>
            <span>COMING SOON</span>
            <strong>Period Emergency Kits</strong>
          </div>

          <div>
            <span>COMING SOON</span>
            <strong>Women's Travel Kits</strong>
          </div>

          <div>
            <span>COMING SOON</span>
            <strong>Hygiene Pouches</strong>
          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section className="about-section" id="about">

        <div className="about-content">

          <p className="section-label">
            ABOUT AURA SAKHI
          </p>

          <h2>
            Thoughtful care,
            <br />
            without making
            <br />
            things complicated.
          </h2>

          <p>
            Aura Sakhi is a growing women's-care brand
            built around simple products that make
            everyday moments a little easier.
          </p>

          <p>
            We're starting small, listening to women
            and creating essentials that actually fit
            into real life.
          </p>

        </div>

      </section>


      {/* ================= FINAL CTA ================= */}

      <section className="final-cta">

        <p className="section-label">
          YOUR EVERYDAY BAG DESERVES ONE TOO
        </p>

        <h2>
          Keep one for
          <br />
          when you need it.
        </h2>

        <button
          className="main-button"
          onClick={scrollToProduct}
        >
          Shop Sanitary Pad Disposal Bags — ₹79
        </button>

        <p>
          Simple. Discreet. Thoughtful.
        </p>

      </section>


      {/* ================= FOOTER ================= */}

      <footer>

        <img
          src={logo}
          alt="Aura Sakhi"
          className="footer-logo"
        />

        <p>
          CARE FOR EVERYDAY MOMENTS
        </p>

        <div className="footer-links">

          <a href="#home">Home</a>
          <a href="#shop">Shop</a>
          <a href="#about">About</a>

        </div>

        <span>
          © 2026 Aura Sakhi. All rights reserved.
        </span>

      </footer>


      {/* ================= CHECKOUT ================= */}

      {showOrder && (

        <div
          className="order-overlay"
          onClick={closeCheckout}
        >

          <div
            className="order-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              type="button"
              className="close-order"
              onClick={closeCheckout}
            >
              ×
            </button>


            {/* ================= CHECKOUT PROGRESS ================= */}

            <div className="checkout-progress">

              <div
                className={
                  checkoutStep === 1
                    ? "checkout-step active"
                    : "checkout-step complete"
                }
              >
                <span>1</span>
                <small>Details</small>
              </div>


              <div className="checkout-line"></div>


              <div
                className={
                  checkoutStep === 2
                    ? "checkout-step active"
                    : "checkout-step"
                }
              >
                <span>2</span>
                <small>Payment</small>
              </div>

            </div>


            {/* ================= SCREEN 1 ================= */}

            {checkoutStep === 1 && (

              <div className="checkout-screen">

                <p className="section-label">
                  STEP 1 OF 2
                </p>

                <h2>
                  Where should we
                  <br />
                  deliver your order?
                </h2>

                <p className="order-intro">
                  Just a few details so we know where
                  to send your Aura Sakhi package.
                </p>


                {/* ORDER SUMMARY */}

                <div className="order-summary">

                  <div className="checkout-product-row">

                    <div>

                      <strong>
                        Sanitary Pad Disposal Bags
                      </strong>

                      <small>
                        Quantity: {quantity}
                      </small>

                    </div>

                    <strong>
                      ₹{productTotal}
                    </strong>

                  </div>


                  <div>
                    <span>
                      Delivery
                    </span>

                    <strong>
                      ₹{deliveryCharge}
                    </strong>
                  </div>


                  <div className="checkout-total">

                    <span>
                      Total
                    </span>

                    <strong>
                      ₹{finalTotal}
                    </strong>

                  </div>

                </div>


                {/* DETAILS FORM */}

                <form onSubmit={goToPayment}>

                  <label>
                    Your name

                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={form.name}
                      onChange={updateForm}
                      required
                    />

                  </label>


                  <label>
                    Phone number

                    <input
                      type="tel"
                      name="phone"
                      placeholder="10-digit mobile number"
                      value={form.phone}
                      onChange={updateForm}
                      required
                    />

                  </label>


                  <label>
                    Delivery address

                    <textarea
                      name="address"
                      placeholder="House / flat, street, area"
                      value={form.address}
                      onChange={updateForm}
                      required
                    />

                  </label>


                  <div className="form-two">

                    <label>
                      City

                      <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={form.city}
                        onChange={updateForm}
                        required
                      />

                    </label>


                    <label>
                      Pincode

                      <input
                        type="text"
                        name="pincode"
                        placeholder="Pincode"
                        value={form.pincode}
                        onChange={updateForm}
                        required
                      />

                    </label>

                  </div>


                  <button
                    type="submit"
                    className="confirm-order"
                  >
                    Proceed to Payment →
                  </button>

                </form>


                <p className="secure-note">
                  Your details are only used to process
                  and deliver your order.
                </p>

              </div>

            )}


            {/* ================= SCREEN 2 ================= */}

            {checkoutStep === 2 && (

              <div className="checkout-screen payment-screen">

                <p className="section-label">
                  STEP 2 OF 2
                </p>

                <h2>
                  Complete your
                  <br />
                  payment
                </h2>

                <p className="order-intro">
                  Pay securely using your preferred UPI app.
                </p>


                {/* ================= AMOUNT ================= */}

                <div className="payment-amount">

                  <span>
                    Amount to pay
                  </span>

                  <strong>
                    ₹{finalTotal}
                  </strong>

                </div>


                {/* ================= REAL UPI QR ================= */}

                <div className="qr-section">

                  <p className="qr-title">
                    Scan & Pay
                  </p>

                  <div className="qr-placeholder">

                    <QRCodeCanvas
                      value={upiLink}
                      size={220}
                      includeMargin={true}
                      level="M"
                    />

                  </div>

                  <p className="qr-note">
                    Scan this QR code using
                    Google Pay, PhonePe or Paytm.
                  </p>

                </div>


                {/* ================= UPI ID ================= */}

                <div className="upi-section">

                  <span>
                    Or pay using UPI ID
                  </span>

                  <div className="upi-id-box">

                    <strong>
                      {upiId}
                    </strong>

                  </div>

                </div>


                {/* ================= UPI BUTTON ================= */}

                <a
                  href={upiLink}
                  className="upi-button"
                >
                  Pay ₹{finalTotal} via UPI →
                </a>


                {/* ================= BACK ================= */}

                <button
                  type="button"
                  className="back-button"
                  onClick={goBackToDetails}
                >
                  ← Back to delivery details
                </button>


                {/* ================= CONFIRM ================= */}

                <button
                  type="button"
                  className="confirm-order payment-confirm"
                  onClick={placeOrder}
                >
                  I've Paid — Confirm My Order →
                </button>


                <p className="secure-note">
                  After payment, we'll verify the payment
                  before confirming your order.
                </p>

              </div>

            )}

          </div>

        </div>

      )}

    </div>
  );
}

export default App;