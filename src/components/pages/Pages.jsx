import Header from "../common/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import Footer from "../common/footer/Footer";
import About from "../about/About";
import Pricing from "../pricing/Pricing";
import Blog from "../blog/Blog";
import Services from "../services/Services";
import Contact from "../contact/Contact";
import React, { useState, useEffect } from "react";
import ExpandLessIcon from "../../assets/expandless.png";

const Pages = () => {
  const [showButton, setShowButton] = useState(false);

  // Function to scroll back to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling animation
    });
  };

  // Add a scroll event listener to show/hide the button
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        // Show the button when the user has scrolled down 100px
        setShowButton(true);
      } else {
        // Hide the button when the user is at the top of the page
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Router basename="/RentUp">
        <Header />
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/services" element={<Services></Services>} />
          <Route path="/blog" element={<Blog></Blog>} />
          <Route path="/pricing" element={<Pricing></Pricing>} />
          <Route path="/contact" element={<Contact></Contact>} />
        </Routes>
        <Footer />
      </Router>
      {showButton && (
        <button className="back-to-top-button" onClick={scrollToTop}>
          <img src={ExpandLessIcon} alt="Back to Top" width="40" height="40" />
        </button>
      )}
    </>
  );
};

export default Pages;
