import React from "react";

const Contact = () => (
  <div className="auth-container">
    <h2>Contact Us</h2>
    <p>For any inquiries, please email us at <a href="mailto:support@fashionboutique.com">support@fashionboutique.com</a> or use the form below.</p>
    <form>
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" required style={{ minHeight: '100px' }} />
      <button type="submit">Send Message</button>
    </form>
  </div>
);

export default Contact;
