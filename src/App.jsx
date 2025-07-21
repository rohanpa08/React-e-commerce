import { useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Cart from './components/Cart'
import CartPage from './pages/CartPage'
import ProductDetails from './pages/ProductDetails'
import ProductList from './components/ProductList'
import ProductCart from './components/ProductCart'
import Login from './pages/Login';
import Register from './pages/Register';
import Settings from './pages/Settings';
import TrackOrder from './pages/TrackOrder';
import PlaceOrder from './pages/PlaceOrder';
import Navbar from './components/Navbar';
import Dresses from './pages/Dresses';
import NewArrivals from './pages/NewArrivals';
import Bestsellers from './pages/Bestsellers';
import Wedding from './pages/Wedding';
import Cocktail from './pages/Cocktail';
import Summer from './pages/Summer';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Shipping from './pages/Shipping';
import Returns from './pages/Returns';
import SizeGuide from './pages/SizeGuide';
import { useEffect } from 'react';


function App() {
  const [cartItems,setCartItems] = useState([]);
  const [showNotification, setShowNotification] = useState(false);


  const addToCart = (product) => {
    setCartItems((prevCart) => {
      const isProductInCart = prevCart.find((item) => item.id === product.id);
      if (isProductInCart) {
        // Do not increase quantity, just show notification
        return prevCart;
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  const updateQuantity = (id, quantity) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };



const removeFromCart = (id) => {
  const Cart = cartItems.filter((item) => item.id !== id);
  setCartItems(Cart);
};

useEffect(()=>{
  const cart=localStorage.getItem('cart')
  const storedCart = cart ? JSON.parse(cart) : [];
  setCartItems(storedCart)

},[])

useEffect(()=>{
  localStorage.setItem('cart',JSON.stringify(cartItems))
},[cartItems])

  return (
    <div className="app-container">
      {showNotification && (
        <div className="cart-notification">Item added to cart!</div>
      )}
      <header className="header">
        <Navbar />
      </header>
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/products" element={<ProductList addToCart={addToCart} />} />
          <Route path="/product/:id" element={<ProductDetails addToCart={addToCart} />} />
          <Route path="/cart" element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/track-order" element={<TrackOrder />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/dresses" element={<Dresses addToCart={addToCart} />} />
          <Route path="/new-arrivals" element={<NewArrivals addToCart={addToCart} />} />
          <Route path="/bestsellers" element={<Bestsellers addToCart={addToCart} />} />
          <Route path="/wedding" element={<Wedding addToCart={addToCart} />} />
          <Route path="/cocktail" element={<Cocktail addToCart={addToCart} />} />
          <Route path="/summer" element={<Summer addToCart={addToCart} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/returns" element={<Returns />} />
          <Route path="/size-guide" element={<SizeGuide />} />
        </Routes>
      </main>
      
     <footer className="footer">
  <div className="footer-container">
    {/* Main Footer Sections */}
    <div className="footer-sections">
      {/* About & Brand Info */}
      <div className="footer-section">
        <h3>Fashion Boutique</h3>
        <p>Discover the latest trends in women's fashion. We offer high-quality dresses for every occasion at affordable prices.</p>
        <div className="payment-methods">
          <img src="/icons/visa.png" alt="Visa" />
          <img src="/icons/mastercard.png" alt="Mastercard" />
          <img src="/icons/paypal.png" alt="PayPal" />
          <img src="/icons/klarna.png" alt="Klarna" />
        </div>
      </div>
      {/* Quick Links */}
      <div className="footer-section">
        <h4>Shop</h4>
        <ul>
          <li><Link to="/dresses">All Dresses</Link></li>
          <li><Link to="/new-arrivals">New Arrivals</Link></li>
          <li><Link to="/bestsellers">Bestsellers</Link></li>
          <li><Link to="/wedding">Wedding Dresses</Link></li>
          <li><Link to="/cocktail">Cocktail Dresses</Link></li>
          <li><Link to="/summer">Summer Collection</Link></li>
        </ul>
      </div>
      {/* Customer Service */}
      <div className="footer-section">
        <h4>Customer Service</h4>
        <ul>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/shipping">Shipping & Delivery</Link></li>
          <li><Link to="/returns">Returns & Exchanges</Link></li>
          <li><Link to="/size-guide">Size Guide</Link></li>
          <li><Link to="/track-order">Track Order</Link></li>
        </ul>
      </div>
      {/* Newsletter */}
      <div className="footer-section">
        <h4>Stay Updated</h4>
        <p>Subscribe to get 10% off your first order and updates on new arrivals.</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Your email address" />
          <button type="submit">Subscribe</button>
        </form>
        <div className="social-links">
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-pinterest"></i></a>
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-tiktok"></i></a>
        </div>
      </div>
    </div>
    {/* Secondary Footer */}
    <div className="footer-secondary">
      <div className="footer-links">
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/terms">Terms of Service</Link>
        <Link to="/cookies">Cookie Policy</Link>
      </div>
      <div className="copyright">
        <p>© 2025 Fashion Boutique. All rights reserved.</p>
      </div>
    </div>
  </div>
</footer>
      </div>


  )
}

export default App






// this is not html it just like this 
// this is jsx 
// useState(initialValue)