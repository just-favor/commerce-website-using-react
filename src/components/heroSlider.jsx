import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./heroslider.css";

const featuredProducts = [
  {
    image: "https://i.pinimg.com/736x/67/2a/2e/672a2eca2b68c1ab9d960e8a864e3e17.jpg",
    title: "Stylish Headphones",
    tagline: "Experience immersive sound",
    // ctaLink: "/products/headphones",
  },
  {
    image: "https://i.pinimg.com/1200x/37/a8/ae/37a8ae2095512429d5d0ffa5d8675378.jpg",
    title: "Smart Watch",
    tagline: "Your fitness companion",
    // ctaLink: "/products/watch",
  },
  {
    image: "https://i.pinimg.com/1200x/3c/20/01/3c200193f5d3045ab1e1a6ef27188a97.jpg",
    title: "Wireless Speaker",
    tagline: "Feel the beat anywhere",
    // ctaLink: "/products/speaker",
  },
];

function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % featuredProducts.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? featuredProducts.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-slider">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          initial={{ x: direction > 0 ? "100%" : "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction > 0 ? "-100%" : "100%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="hero-slide-content"
        >
          <img
            src={featuredProducts[current].image}
            alt={featuredProducts[current].title}
            className="hero-slide-image"
          />
          <div className="hero-slide-text">
            <h1>{featuredProducts[current].title}</h1>
            <p>{featuredProducts[current].tagline}</p>
            {/* <a href={featuredProducts[current].ctaLink} className="hero-cta-button">Shop Now</a> */}
          </div>
        </motion.div>
      </AnimatePresence>

      <button onClick={prevSlide} className="hero-slider-button prev">
        <ChevronLeft />
      </button>
      <button onClick={nextSlide} className="hero-slider-button next">
        <ChevronRight />
      </button>
    </div>
  );
}

export default HeroSlider;
