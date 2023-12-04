import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveTokenToLocalStorage } from "../services/saveUserToken";
// import './style.css'
export const JobSeekerLoginForm = ({ onFormSwitch }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const apiUrl = process.env.REACT_APP_API_URL;

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const loginData = {
        email,
        password,
      };

      // Make the API request to handle login
      const response = await fetch(`${apiUrl}/candidate/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const data = await response.json();
        saveTokenToLocalStorage(data.token);
        //check for pending application
        const pendingApplication = localStorage.getItem("pendingApplication");
        const jobId = localStorage.getItem("jobId");

        if (pendingApplication) {
          // Redirect the user to the job application page
          navigate(`/jobs/${jobId}/apply`);
          localStorage.removeItem("pendingApplication");
        } else {
          navigate("/jobseeker");
        }
        console.log("Login successful");
        setEmail("");
        setPassword("");
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  return (
    <div className="auth-container">
      <header className="header">
        <nav className="secondary-nav">
          <ul>
            <li className="header-title"></li>
            <li className="header-login">
              <button onClick={() => onFormSwitch("register")}>register</button>
            </li>
          </ul>
        </nav>
      </header>
      <div className="input-container">
        <form className="employer-form">
          <h2>Log In</h2>

          <input
            type="email"
            value={email}
            name="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            value={password}
            name="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-button" onClick={(e) => handleLogin(e)}>
            Sign In
          </button>
          <button
            onClick={() => onFormSwitch("register")}
            className="switch-button"
          >
            Not registered? create an Account
          </button>
        </form>
      </div>
    </div>
  );
};
