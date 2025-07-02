import React from 'react';
import ProductList from '../components/ProductList';
import '../components/style.css';

const Home = ({ addToCart }) => {
  return (
    <div className="home-container">
      <h1>Product List</h1>
      <ProductList addToCart={addToCart} /> 
    </div>
  );
};

export default Home;
