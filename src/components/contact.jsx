// src/components/Contact.jsx
import React from 'react';
import './contact.css'; // We'll create this CSS file next

function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <div className="contact-container">
        <div className="contact-info">
          <p>
            <strong>Email:</strong> <a href="mailto:thejaskiran99@gmail.com">thejaskiran99@gmail.com</a>
          </p>
          <p>
            <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/thejasbk" target="_blank" rel="noopener noreferrer">linkedin.com/in/thejasbk</a>
          </p>
          <p>
            <strong>Credly:</strong> <a href="https://www.credly.com/users/thejas-kiran.7af7c70e" target="_blank" rel="noopener noreferrer">credly.com/users/thejas-kiran</a>
          </p>
          <p>
            <strong>Location:</strong> Bentonville, AR
          </p>
        </div>

        <div className="contact-form-container">
          <h3>Send a Message</h3>
          <form action="https://formspree.io/f/xjkwqqww" method="POST" className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email:</label>
              <input type="email" id="email" name="_replyto" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;