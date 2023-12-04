import React from "react";
import { useState } from "react";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import "./style.css";
import { useNavigate } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

export const EmployerLoginForm = ({ onFormSwitch }) => {
  const navigate = useNavigate();
  const apiUrl = process.env.REACT_APP_API_URL;

  const handleSubmit = async (values) => {
    try {
      const response = await fetch(`${apiUrl}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("employerToken", data.token);

        console.log("Login successful");
        navigate("/employer/dashboard");
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
        <h2>Log In</h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className="employer-form">
              <div className="form-control-inputs">
                <label htmlFor="email">Email</label>
                <Field name="email" type="text" placeholder="email" />
                {errors.email && touched.email && (
                  <div className="error">{errors.email}</div>
                )}
                <label htmlFor="password">Password</label>
                <Field name="password" type="password" placeholder="Password" />
                {errors.password && touched.password && (
                  <div className="error">{errors.password}</div>
                )}
              </div>

              <button type="submit" className="login-button">
                Login
              </button>

              <button
                type="button"
                onClick={onFormSwitch}
                className="switch-button"
              >
                Don't have an account? Register here
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
