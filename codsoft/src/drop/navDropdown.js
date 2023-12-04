import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../components/navbar/navbar.css";

export const NavDropDown = ({ title, options }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");

    navigate("/jobseeker");
  };

  return (
    <div className="dropdown">
      <div className="navdropdown-header">{title}</div>

      <div className="dropdown-content">
        {options.map((option, index) => (
          <span key={index}>
            {option === "Employer" && (
              <Link to="/employer" style={{ textDecoration: "none" }}>
                {option}
              </Link>
            )}
            {option === "Jobseeker" && (
              <Link to="/jobSeeker" style={{ textDecoration: "none" }}>
                {option}
              </Link>
            )}
            {option === "FAQs" && (
              <Link to="#" style={{ textDecoration: "none" }}>
                {option}
              </Link>
            )}
            {option === "Privacy Policy" && (
              <Link to="#" style={{ textDecoration: "none" }}>
                {option}
              </Link>
            )}
            {option === "Account-settings" && (
              <Link
                to="/candidate/account-settings"
                style={{ textDecoration: "none" }}
              >
                {option}
              </Link>
            )}
            {option === "Your Applications" && (
              <Link
                to="/candidate/view-applications"
                style={{ textDecoration: "none" }}
              >
                {option}
              </Link>
            )}
            {option === "LogOut" && (
              <div onClick={handleLogout} style={{ textDecoration: "none" }}>
                {option}
              </div>
            )}
          </span>
        ))}
      </div>
    </div>
  );
};
