// src/components/ContactUs.js

import React, { useState } from 'react';
import emailjs from '@emailjs/browser'; // Import EmailJS
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_wfdbpdg', // Replace with your EmailJS service ID
        'template_6mrwlom', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          from_phone: formData.phone,
          message: formData.message,
        },
        'IZItgi8EQUTVyla0Q' // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setStatus('Message sent successfully!');
          setFormData({ name: '', email: '', phone: '', message: '' }); // Reset form
        },
        (err) => {
          console.error('FAILED...', err);
          setStatus('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-form-wrapper">
          <h2 className="contact-title">Get in touch</h2>
          <p className="contact-subtitle">We're here to support your journey</p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name <span className="required">*</span></label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            
            <label htmlFor="email">Email address <span className="required">*</span></label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            
            <label htmlFor="phone">Phone number <span className="required">*</span></label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            
            <div className="checkbox-wrapper">
              <input type="checkbox" id="consent" name="consent" required />
              <label htmlFor="consent">
                I allow this website to store my submission so they can respond to my inquiry. <span className="required">*</span>
              </label>
            </div>
            
            <button type="submit" className="submit-button">Submit</button>
          </form>
          {status && <p className="form-status">{status}</p>}
        </div>
        <div className="contact-details-wrapper">
          <div className="contact-details">
            <p><strong>Email:</strong> <a href="mailto:ankush.014k@gmail.com">ankush.014k@gmail.com</a></p>
            <p><strong>Location:</strong> <a href="https://www.google.com/maps/place/+Pune+MH+IN" target="_blank" rel="noreferrer">Pune, MH IN</a></p>
            <p><strong>Hours:</strong></p>
            <ul>
              <li>Monday - Friday: 9:00am - 10:00pm</li>
              <li>Saturday: 9:00am - 6:00pm</li>
              <li>Sunday: 9:00am - 12:00pm</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;