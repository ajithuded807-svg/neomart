import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      {/* Welcome Section */}
      <section className="welcome-section">
        <div className="welcome-content">
          <h1>Welcome to NeoMart</h1>
          <p>Your one-stop shop for all your needs!</p>
          <button className="shop-now-btn">Shop Now</button>
        </div>
      </section>

      {/* Example More Content */}
      <section className="features-section">
        <h2>Why Choose NeoMart?</h2>
        <div className="features">
          <div className="feature-card">
            <h3>Wide Variety</h3>
            <p>Thousands of products to choose from.</p>
          </div>
          <div className="feature-card">
            <h3>Best Prices</h3>
            <p>Affordable rates for quality products.</p>
          </div>
          <div className="feature-card">
            <h3>Fast Delivery</h3>
            <p>Quick and reliable shipping to your doorstep.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
