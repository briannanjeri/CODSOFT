import React from "react";
import "./style.css";
import { useEmployerProfile } from "../job-post/employerProfileContext";

const HeroSection = () => {
  const { employerProfile, setEmployerProfile } = useEmployerProfile();
  console.log("employerProfile", employerProfile);

  return (
    <div className="hero-container">
      <div className="hero-details">
        <div className="company-details">
          <h2>{employerProfile.companyName}</h2>
        </div>
        <div className="welcome-message">
          <h1>{`welcome ${employerProfile.firstName} ${employerProfile.lastName} `}</h1>
          <h2>Manage Your Job Listings and Applications.</h2>
        </div>
      </div>
      {/* <h2 className="statistics-title">Key Statistics</h2> */}
    </div>
  );
};

export default HeroSection;
