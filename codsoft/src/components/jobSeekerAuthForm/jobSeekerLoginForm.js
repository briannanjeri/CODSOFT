import React from 'react'
import { useState } from "react";


export const JobSeekerLoginForm = ({ onFormSwitch }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const handleLogin = async (e) => {
    e.preventDefault();

    // Add your login logic here
    try {
      const loginData = {
        email,
        password,
      };

      // Make the API request to handle login
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        // Login successful, you may handle the success scenario (e.g., show a success message, redirect to dashboard)
        console.log('Login successful');
      } else {
        // Login failed, handle the error (e.g., show an error message)
        console.error('Login failed');
      }
    } catch (error) {
      // Handle any unexpected errors
      console.error('Error during login:', error);
    }
  };
  return (
    <div className="auth-container">
      <header className="header">
        <nav className="secondary-nav">
          <ul>
            <li className="header-title">{/* <a href="#">Chat App</a> */}</li>
            <li className="header-login">
              <button onClick={() => onFormSwitch("register")}>register</button>
            </li>
          </ul>
        </nav>
      </header>
      <div className="input-container">
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
        <button >Sign In</button>
        <button
          onClick={() => onFormSwitch("register")}
          className="switch-button"
        >
          Not registered? create an Account
        </button>
      </div>
    </div>
  );
}

