import React from "react";
import "./style.css";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-details">
        <div className="company-details">
          <h2>TechCo</h2>
        </div>
        <div className="welcome-message">
          <h1>welcome Brian Nanjeri</h1>
          <h2>Manage Your Job Listings and Applications.</h2>
        </div>
      </div>
      <h2 className="statistics-title">Key Statistics</h2>
    </div>
  );
};

export default HeroSection;
