import React from "react";
import { useDataContext } from "./dataContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import "./style.css";

const validationSchema = yup.object({
  jobTitle: yup.string().required("Job Title is required"),
  companyName: yup.string().required("Company Name is required"),
  state: yup.string().required("State is required"),
  city: yup.string().required("City is required"),
  location: yup.string().required("Location is required"),
  category: yup.string().required("Category is required"),
  jobType: yup.string().required("Job Type is required"),
  jobDescription: yup.string().required("Job Description is required"),
  qualifications: yup.string().required("Qualifications are required"),
  skills: yup.string().required("Skills are required"),
  requirements: yup.string(),
  salary: yup.string().required("Salary is required"),
  applicationDeadline: yup.date().required("Application Deadline is required"),
});
  const apiUrl = process.env.REACT_APP_API_URL;

const EmployerJobPostingForm = () => {
  const initialValues = {
    jobTitle: "",
    companyName: "",
    state: "",
    city: "",
    location: "",
    category: "",
    jobType: "",
    jobDescription: "",
    qualifications: "",
    skills: "",
    requirements: "",
    salary: "",
    applicationDeadline: "",
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const requestBody = {
        jobTitle: values.jobTitle,
        companyName: values.companyName,
        state: values.state,
        city: values.city,
        location: values.location,
        category: values.category,
        jobType: values.jobType,
        jobDescription: values.jobDescription,
        qualifications: values.qualifications,
        skills: values.skills,
        requirements: values.requirements,
        salary: values.salary,
        applicationDeadline: values.applicationDeadline,
      };

      // Make the API request
      const token = localStorage.getItem("employerToken");
      const response = await fetch(`${apiUrl}/jobPosting`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        // resetForm()

        console.log("Job posting created successfully");
        const data = await response.json();
        alert(data.message);
        console.log("jobpostingdata", data);
      } else {
        console.error("Failed to create job posting");
        const data = await response.json();
        throw new Error(data.error);
      }
    } catch (error) {
      console.error("Error submitting job posting:", error);
    }
  };

  const { categories, jobTypes, locations } = useDataContext();

  return (
    <div className="job-posting-form-container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="employer-form">
            <div className="form-control-inputs">
              <label htmlFor="jobTitle">
                Job Title <span className="required">*</span>
              </label>
              <Field type="text" name="jobTitle" />
              {errors.jobTitle && touched.jobTitle && (
                <div className="error">{errors.jobTitle}</div>
              )}

              <label htmlFor="companyName">
                Company Name<span className="required">*</span>
              </label>
              <Field type="text" name="companyName" />
              {errors.companyName && touched.companyName && (
                <div className="error">{errors.companyName}</div>
              )}

              <label htmlFor="state">
                State<span className="required">*</span>
              </label>
              <Field type="text" name="state" />
              {errors.state && touched.state && (
                <div className="error">{errors.state}</div>
              )}

              <label htmlFor="city">
                City<span className="required">*</span>
              </label>
              <Field type="text" name="city" />
              {errors.city && touched.city && (
                <div className="error">{errors.city}</div>
              )}

              <label htmlFor="location">
                Location<span className="required">*</span>
              </label>

              <Field as="select" name="location">
                <option value="">Select Location</option>
                {locations &&
                  locations.map((location) => (
                    <option key={location._id} value={location.name}>
                      {location.name}
                    </option>
                  ))}
              </Field>
              {errors.location && touched.location && (
                <div className="error">{errors.location}</div>
              )}

              <label htmlFor="category">
                Category<span className="required">*</span>
              </label>
              <Field as="select" name="category">
                <option value="">Select Category</option>
                {categories &&
                  categories.map((category) => (
                    <option key={category._id} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                {/* Add more categories as needed */}
              </Field>
              {errors.category && touched.category && (
                <div className="error">{errors.category}</div>
              )}
              <label htmlFor="jobType">
                Job Type<span className="required">*</span>
              </label>
              <Field as="select" name="jobType">
                <option value="">Select Job Type</option>
                {jobTypes &&
                  jobTypes.map((jobType) => (
                    <option key={jobType._id} value={jobType.name}>
                      {jobType.name}
                    </option>
                  ))}
                {/* Add more job types as needed */}
              </Field>
              {errors.jobType && touched.jobType && (
                <div className="error">{errors.jobType}</div>
              )}

              <label htmlFor="jobDescription">
                Job Description<span className="required">*</span>
              </label>
              <Field as="textarea" name="jobDescription" />
              {errors.jobDescription && touched.jobDescription && (
                <div className="error">{errors.jobDescription}</div>
              )}

              <label htmlFor="qualifications">
                Qualifications<span className="required">*</span>
              </label>
              <Field as="textarea" name="qualifications" />
              {errors.qualifications && touched.qualifications && (
                <div className="error">{errors.qualifications}</div>
              )}

              <label htmlFor="skills">
                Skills<span className="required">*</span>
              </label>
              <Field type="text" name="skills" />
              {errors.skills && touched.skills && (
                <div className="error">{errors.skills}</div>
              )}

              <label htmlFor="requirements">
                Requirements<span className="required">*</span>
              </label>
              <Field type="text" name="requirements" />
              {errors.requirements && touched.requirements && (
                <div className="error">{errors.requirements}</div>
              )}

              <label htmlFor="salary">
                Salary<span className="required">*</span>
              </label>
              <Field type="text" name="salary" />
              {errors.salary && touched.salary && (
                <div className="error">{errors.salary}</div>
              )}

              <label htmlFor="applicationDeadline">
                Application Deadline<span className="required">*</span>
              </label>
              <Field type="date" name="applicationDeadline" />
              {errors.applicationDeadline && touched.applicationDeadline && (
                <div className="error">{errors.applicationDeadline}</div>
              )}

              <button type="submit" className="submit-button">
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EmployerJobPostingForm;
