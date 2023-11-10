import React from "react";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import './style.css'

const initialValues = {
  contact: {
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phone: "",
  },
  company: {
    companyName: "",
    companyWebsite: "",
    companyDescription: "",
  },
  password: {
    password: "",
    confirmPassword: "",
  },
};


const validationSchema = yup.object({
  contact: yup.object({
    firstName: yup.string().required("First name is required"),
    middleName: yup.string(),
    lastName: yup.string().required("Last name is required"),
    email: yup.string().email("Invalid email address").required("Email is required"),
    phone: yup.string().required("Phone number is required"),
  }),
  company: yup.object({
    companyName: yup.string().required("Company name is required"),
    companyWebsite: yup.string().url("Invalid URL").required("Company website is required"),
    companyDescription: yup.string().required("Company description is required"),
  }),
  password: yup.object({
    password: yup.string().required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  }),
});
// ... (Previous code)

export const EmployerRegisterForm = ({ category, onSubmit,onFormSwitch }) => {
  return (
    <div>
        <header className="header">
        <nav className="secondary-nav">
          <ul>
            <li className="header-title">{/* <a href="#">Chat App</a> */}</li>
            <li className="header-login">
              <button onClick={() => onFormSwitch("login")}>Login</button>
            </li>
          </ul>
        </nav>
      </header>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <Form className="employer-form">
          <h1>Employer form</h1>

          {/* Contact Information */}
          <div className="contact-details">
            <h2>Contact Information</h2>
            <div className="form-control-inputs">
              <label htmlFor="contact.firstName">First Name<span className="required">*</span></label>
              <Field name="contact.firstName" placeholder="First Name" />
              {errors.contact?.firstName && touched.contact?.firstName && (
                <div className="error">{errors.contact.firstName}</div>
              )}

              <label htmlFor="contact.middleName">Middle Name</label>
              <Field name="contact.middleName" placeholder="Middle Name" />

              <label htmlFor="contact.lastName">Last Name<span className="required">*</span></label>
              <Field name="contact.lastName" placeholder="Last Name" />
              {errors.contact?.lastName && touched.contact?.lastName && (
                <div className="error">{errors.contact.lastName}</div>
              )}

              <label htmlFor="contact.email">Email<span className="required">*</span></label>
              <Field name="contact.email" type="email" placeholder="Email" />
              {errors.contact?.email && touched.contact?.email && (
                <div className="error">{errors.contact.email}</div>
              )}

              <label htmlFor="contact.phone">Phone<span className="required">*</span></label>
              <Field name="contact.phone" placeholder="Phone" />
              {errors.contact?.phone && touched.contact?.phone && (
                <div className="error">{errors.contact.phone}</div>
              )}
            </div>
          </div>

          {/* Company Information */}
          <div>
            <h2>Company Information</h2>
            <div className="form-control-inputs">
              <label htmlFor="company.companyName">Company Name<span className="required">*</span></label>
              <Field name="company.companyName" placeholder="Company Name" />
              {errors.company?.companyName && touched.company?.companyName && (
                <div className="error">{errors.company.companyName}</div>
              )}

              <label htmlFor="company.companyWebsite">Company Website<span className="required">*</span></label>
              <Field name="company.companyWebsite" placeholder="Company Website" />
              {errors.company?.companyWebsite && touched.company?.companyWebsite && (
                <div className="error">{errors.company.companyWebsite}</div>
              )}

              <label htmlFor="company.companyDescription">Company Description<span className="required">*</span></label>
              <Field
                name="company.companyDescription"
                placeholder="Company Description"
              />
              {errors.company?.companyDescription &&
                touched.company?.companyDescription && (
                  <div className="error">{errors.company.companyDescription}</div>
                )}
            </div>
          </div>

          {/* Password */}
          <div>
            <h2>Password</h2>
            <div className="form-control-inputs">
              <label htmlFor="password.password">Password<span className="required">*</span></label>
              <Field name="password.password" type="password" placeholder="Password" />
              {errors.password?.password && touched.password?.password && (
                <div className="error">{errors.password.password}</div>
              )}

              <label htmlFor="password.confirmPassword">Confirm Password<span className="required">*</span></label>
              <Field
                name="password.confirmPassword"
                type="password"
                placeholder="Confirm Password"
              />
              {errors.password?.confirmPassword &&
                touched.password?.confirmPassword && (
                  <div className="error">{errors.password.confirmPassword}</div>
                )}
            </div>
          </div>

          <button className="register-button" type="submit">
            Register {category}
          </button>
          <button onClick={() => onFormSwitch("login")} className="switch-button">
          Already have an account? login here
        </button>
        </Form>
      )}
    </Formik>
    </div>
  );
};


