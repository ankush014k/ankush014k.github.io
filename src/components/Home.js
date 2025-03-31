import React, { useEffect } from 'react';
import backgroundImage from '../assets/images/homepagebackgroundimage.jpeg'; // Import the image
import transformImage from '../assets/images/homepage-transform-life.jpeg'; // Import the image
import ContactUs from './ContactUs'; // Import the ContactUs component
import './Home.css'; // Import the CSS file

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.querySelector('.about-section');
      const rect = aboutSection.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        aboutSection.classList.add('animated');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <section
        className="home-section"
        style={{
          backgroundImage: `
            linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
            url(${backgroundImage})
          `,
        }}
      >
        <div className="home-content animated">
          <div className="sb-hero__content-wrapper">
            <h1 className="home-title">Transform your life</h1>
            <p className="home-subtitle">
              Embrace the power of <span className="highlight-text">yoga</span>
            </p>
            <div className="cta-wrapper">
              <a href="/index#services" className="cta-button secondary">
                View services
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-container">
          <div className="about-content">
            <h2 className="about-title">Transform your life</h2>
            <p className="about-subtitle">Unlock the power of yoga</p>
            <p className="about-description">
              At YogoForLife, we believe in the transformative power of yoga for both the body and the soul. Our dedicated team in Pune, IN, guides you through practices that enhance your physical strength, mental clarity, and emotional balance. Whether you're a beginner or an experienced yogi, our personalized sessions cater to your unique journey. Experience the harmony of mind, body, and spirit with us, and embark on a path to a healthier, more fulfilling life.
            </p>
            <div className="cta-wrapper">
              <a href="/index#contact" className="cta-button secondary">
                Get in touch
              </a>
            </div>
          </div>
          <div className="about-image">
            <img
              src={transformImage}
              alt="yoga transformation"
            />
          </div>
        </div>
      </section>

      <section id="services" className="services-section">
        <div className="services-container">
          <div className="services-header">
            <h2 className="services-title">Transformative yoga</h2>
            <p className="services-subtitle">Elevate your mind, body, and soul.</p>
          </div>
          <ul className="services-grid">
            <li className="services-item">
              <div className="services-image" style={{ backgroundImage: `url('https://cdn.b12.io/client_media/WBPn5eIw/691b14c6-0e0f-11f0-83d2-0242ac110002-jpg-hero_image.jpeg')` }}></div>
              <h3 className="services-item-title">Transformative yoga sessions</h3>
              <p className="services-item-description">Experience a profound change in your body and mind with our yoga sessions.</p>
            </li>
            <li className="services-item">
              <div className="services-image" style={{ backgroundImage: `url('https://cdn.b12.io/client_media/WBPn5eIw/698ffebc-0e0f-11f0-83d2-0242ac110002-jpg-hero_image.jpeg')` }}></div>
              <h3 className="services-item-title">Mindfulness and meditation classes</h3>
              <p className="services-item-description">Cultivate inner peace and awareness through mindfulness practices.</p>
            </li>
            <li className="services-item">
              <div className="services-image" style={{ backgroundImage: `url('https://cdn.b12.io/client_media/WBPn5eIw/695a5f6e-0e0f-11f0-83d2-0242ac110002-jpg-hero_image.jpeg')` }}></div>
              <h3 className="services-item-title">Yoga for all ages</h3>
              <p className="services-item-description">Inclusive yoga practices suitable for everyone, regardless of age or ability.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Reuse the ContactUs component */}
      <ContactUs />
    </>
  );
};

export default Home;