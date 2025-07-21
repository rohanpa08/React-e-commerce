import React from 'react';

import ProductList from '../components/ProductList';
import '../components/style.css';

// CategoryCard component for Home page
function CategoryCard({ link, icon, title }) {
  return (
    <div className="card product-card category-card">
      <a href={link} className="product-link">
        <div className="image-container" style={{ fontSize: '2.5rem', padding: '1.5rem 0' }}>
          {icon}
        </div>
        <div className="card-body text-center">
          <h3 className="card-title">{title}</h3>
        </div>
      </a>
    </div>
  );
}

const Home = ({ addToCart }) => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h1 className="hero-title">Welcome to Sport Hub</h1>
        <p className="hero-subtitle">Shop the latest sports gear, apparel, and accessories. Fast delivery, best prices, and top brands!</p>
        <a href="/products" className="hero-btn">Shop Now</a>
      </section>
      
      <ProductList addToCart={addToCart} />
    </div>
  );
};

export default Home;
