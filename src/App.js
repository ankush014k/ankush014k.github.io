import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css"; // Import CSS for styling
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Schedule from "./components/Schedule";
import Pricing from "./components/Pricing";
import Gallery from "./components/Gallery";
import ContactUs from "./components/ContactUs";
import Blog from "./components/Blog";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <div className="content bg-gray-100 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
