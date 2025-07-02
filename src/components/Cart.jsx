import React from 'react';

const Cart = ({ cartItems = [], removeFromCart }) => {
  return (
    <div className="cart-items-container">
      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <ul className="list-group">
          {cartItems.map((item) => (
            <li key={item.id} className="list-group-item d-flex align-items-center">
              <img
                src={item.image}
                alt={item.title}
                className="cart-item-image me-3"
              />
              <div className="flex-grow-1">
                <h6 className="mb-1">{item.title}</h6>
                <small className="text-muted">${item.price}</small>
              </div>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
