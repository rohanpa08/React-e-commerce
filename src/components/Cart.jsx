import React from 'react';


const Cart = ({ cartItems = [], removeFromCart, updateQuantity, onBuyNow, onPlaceOrder }) => {
  return (
    <div className="cart-items-container">
      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <>
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
                  <div className="quantity-controls">
                    <button className="btn btn-sm btn-secondary" onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
                    <span className="mx-2">{item.quantity}</span>
                    <button className="btn btn-sm btn-secondary" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                </div>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
                <button
                  className="btn btn-success btn-sm ms-2"
                  onClick={() => onBuyNow(item)}
                >
                  Buy Now
                </button>
              </li>
            ))}
          </ul>
          <div className="place-order-container text-center mt-3">
            <button className="btn btn-primary" onClick={onPlaceOrder}>Place Order</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
