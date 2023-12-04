import React from "react";
import * as yup from "yup";
import { registerEmployer } from "../services/api";
import { Formik, Form, Field } from "formik";
import "./style.css";

const initialValues = {
  firstName: "",
  middleName: "",
  lastName: "",
  email: "",
  phone: "",
  companyName: "",
  companyWebsite: "",
  companyDescription: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = yup.object({
  firstName: yup.string().required("First name is required"),
  middleName: yup.string(),
  lastName: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: yup.string().required("Phone number is required"),
  companyName: yup.string().required("Company name is required"),
  companyWebsite: yup
    .string()
    .url("Invalid URL")
    .required("Company website is required"),
  companyDescription: yup.string().required("Company description is required"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

const handleSubmit = async (values) => {
  const responseData = await registerEmployer(values);
};

export const EmployerRegisterForm = ({ onFormSwitch }) => {
  return (
    <div>
      <header className="header">
        <nav className="secondary-nav">
          <ul>
            <li className="header-title"></li>
            <li className="header-login">
              <button onClick={() => onFormSwitch("login")}>Login</button>
            </li>
          </ul>
        </nav>
      </header>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="employer-form">
            <h1>Employer form</h1>

            {/* Contact Information */}
            <div className="contact-details">
              <h2>Contact Information</h2>
              <div className="form-control-inputs">
                <label htmlFor="firstName">
                  First Name<span className="required">*</span>
                </label>
                <Field name="firstName" placeholder="First Name" />
                {errors.firstName && touched.firstName && (
                  <div className="error">{errors.firstName}</div>
                )}
                <label htmlFor="middleName">Middle Name</label>
                <Field name="middleName" placeholder="Middle Name" />

                <label htmlFor="lastName">
                  Last Name<span className="required">*</span>
                </label>
                <Field name="lastName" placeholder="Last Name" />
                {errors.lastName && touched.lastName && (
                  <div className="error">{errors.lastName}</div>
                )}

                <label htmlFor="email">
                  Email<span className="required">*</span>
                </label>
                <Field name="email" type="email" placeholder="Email" />
                {errors.email && touched.email && (
                  <div className="error">{errors.email}</div>
                )}
                <label htmlFor="phone">
                  Phone<span className="required">*</span>
                </label>
                <Field name="phone" placeholder="Phone" />
                {errors.phone && touched.phone && (
                  <div className="error">{errors.phone}</div>
                )}
              </div>
            </div>

            {/* Company Information */}
            <div>
              <h2>Company Information</h2>
              <div className="form-control-inputs">
                <label htmlFor="companyName">
                  Company Name<span className="required">*</span>
                </label>
                <Field name="companyName" placeholder="Company Name" />
                {errors.companyName && touched.companyName && (
                  <div className="error">{errors.companyName}</div>
                )}
                <label htmlFor="companyWebsite">
                  Company Website<span className="required">*</span>
                </label>
                <Field name="companyWebsite" placeholder="Company Website" />
                {errors.companyWebsite && touched.companyWebsite && (
                  <div className="error">{errors.companyWebsite}</div>
                )}

                <label htmlFor="companyDescription">
                  Company Description<span className="required">*</span>
                </label>
                <Field
                  name="companyDescription"
                  placeholder="Company Description"
                />
                {errors.companyDescription && touched.companyDescription && (
                  <div className="error">{errors.companyDescription}</div>
                )}
              </div>
            </div>

            {/* Password */}
            <div>
              <h2>Password</h2>
              <div className="form-control-inputs">
                <label htmlFor="password">
                  Password<span className="required">*</span>
                </label>
                <Field name="password" type="password" placeholder="Password" />
                {errors.password && touched.password && (
                  <div className="error">{errors.password}</div>
                )}

                <label htmlFor="confirmPassword">
                  Confirm Password<span className="required">*</span>
                </label>
                <Field
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <div className="error">{errors.confirmPassword}</div>
                )}
              </div>
            </div>
            <button className="register-button" type="submit">
              Register
            </button>
            <button
              onClick={() => onFormSwitch("login")}
              className="switch-button"
            >
              Already have an account? login here
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
