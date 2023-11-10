import React from 'react'
import { useState } from 'react';
import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import './style.css'

  const initialValues = {
    email: '',
    password: '',
  }

const validationSchema = yup.object({
  email: yup.string().email('Invalid email address').required('Email is required'),
  password: yup.string().required('Password is required'),
});

export const EmployerLoginForm = ({onFormSwitch}) => {
    
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


      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        // onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="employer-form">
            <div className="form-control-inputs">

            <label htmlFor="email">Email</label>
            <Field name="email" type="text" placeholder="email" />
            {errors.email && touched.email && (
              <div>{errors.email}</div>
            )}
            <label htmlFor="password">Password</label>
            <Field name="password" type="password" placeholder="Password" />
            {errors.password && touched.password && (
              <div>{errors.password}</div>
            )}
            </div>

            <button type="submit" className='login-button'>Login</button>

            <button type="button" onClick={onFormSwitch} className="switch-button">
              Don't have an account? Register here
            </button>
          </Form>
        )}
      </Formik>
    </div>
    </div>
  );
}
