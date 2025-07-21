import React from "react";


import { useState, useEffect } from "react";

const TrackOrder = () => {
  const [orders, setOrders] = useState([]);
  const [searchId, setSearchId] = useState("");
  const [foundOrder, setFoundOrder] = useState(null);

  useEffect(() => {
    const orders = JSON.parse(localStorage.getItem("orders") || "[]");
    setOrders(orders);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const order = orders.find(o => o.id === searchId);
    setFoundOrder(order || null);
  };

  return (
    <div className="auth-container track-order-container">
      <h2>Track My Order</h2>
      <form onSubmit={handleSearch}>
        <input type="text" placeholder="Order ID" value={searchId} onChange={e => setSearchId(e.target.value)} required />
        <button type="submit">Track</button>
      </form>
      {foundOrder ? (
        <div className="order-details">
          <h4>Order Details</h4>
          <p><strong>Order ID:</strong> {foundOrder.id}</p>
          <p><strong>Address:</strong> {foundOrder.address}</p>
          <p><strong>Contact:</strong> {foundOrder.contact}</p>
          <p><strong>Status:</strong> {foundOrder.status}</p>
        </div>
      ) : searchId ? (
        <p>No order found with that ID.</p>
      ) : null}
      <h4>Recent Orders</h4>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            <strong>ID:</strong> {order.id} | <strong>Status:</strong> {order.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrackOrder;
