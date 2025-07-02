import React from 'react';
import Cart from '../components/Cart';

const CartPage = ({ cartItems = [], removeFromCart }) => {
  return (
    <div className="cart-page-container">
    <h1 className="cart-title">Shopping Cart</h1>

    {cartItems.length > 0 ? (
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    ) : (
      <div className="empty-cart">
        <p>Your cart is empty.</p>
        <a href="/" className="continue-shopping-btn">Continue Shopping</a>
      </div>
    )}
  </div>
  );
};

export default CartPage;
