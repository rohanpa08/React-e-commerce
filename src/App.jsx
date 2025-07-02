import { useState } from 'react'
import { Route,Routes,Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Cart from './components/Cart'
import CartPage from './pages/CartPage'
import ProductDetails from './pages/ProductDetails'
import ProductList from './components/ProductList'
import ProductCart from './components/ProductCart'
import { useEffect } from 'react';


function App() {
  const [cartItems,setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevCart) => {
      const isProductInCart = prevCart.find((item) => item.id === product.id);

      if (isProductInCart) {
        
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
      
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
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
      <header className="header">
        <nav className="nav">
          <div className="nav-logo">
            <Link to="/">SPort HUb</Link>
          </div>
          <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/products" className="nav-link">Products</Link>
            <Link to="/cart" className="nav-link cart-link">
              Cart 
              {cartItems.length > 0 && (
                <span className="cart-badge">{cartItems.length}</span>
              )}
            </Link>
          </div>
        </nav>
      </header>
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/products" element={<ProductList addToCart={addToCart} />} />
          <Route path="/product/:id" element={<ProductDetails addToCart={addToCart} />} />
          <Route path="/cart" element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} />} />
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
          <li><a href="/dresses">All Dresses</a></li>
          <li><a href="/new-arrivals">New Arrivals</a></li>
          <li><a href="/bestsellers">Bestsellers</a></li>
          <li><a href="/wedding">Wedding Dresses</a></li>
          <li><a href="/cocktail">Cocktail Dresses</a></li>
          <li><a href="/summer">Summer Collection</a></li>
        </ul>
      </div>
      
      {/* Customer Service */}
      <div className="footer-section">
        <h4>Customer Service</h4>
        <ul>
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/shipping">Shipping & Delivery</a></li>
          <li><a href="/returns">Returns & Exchanges</a></li>
          <li><a href="/size-guide">Size Guide</a></li>
          <li><a href="/track-order">Track Order</a></li>
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
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
        <a href="/cookies">Cookie Policy</a>
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