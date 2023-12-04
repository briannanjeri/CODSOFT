import React from "react";
import { useState } from "react";
import { Formik, Field, Form } from "formik";
import { initialValues } from "./applicationFormDetails";
import { JobValidationSchema } from "./applicationFormDetails";
import { applyForJob } from "../services/jobApplication";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./style.css";
export const JobApplicationForm = () => {
  const [file, setFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const { jobId } = useParams();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const AppliedData = await applyForJob(
        values,
        file,
        jobId,
        setErrorMessage,
      );
      if (AppliedData) {
        setErrorMessage(null);

        resetForm()
        alert("Job application successful:");
        //  navigate('/jobListing')
      }
    } catch (error) {
      console.log(error.errorMessage);
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={JobValidationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, setFieldValue }) => (
        <Form className="job-application-form" encType="multipart/form-data">
          {/* Resume */}
          <div className="form-group">
            <label htmlFor="resume">Resume:</label>
            <Field
              type="file"
              name="resume"
              accept=".pdf, .doc, .docx"
              onChange={(e) => handleFileChange(e, setFieldValue)}
            />
            {file && (
              <div>
                <p>Selected file: {file.name}</p>
              </div>
            )}
            {errors.resume && touched.resume && (
              <div className="error">{errors.resume}</div>
            )}{" "}
          </div>
          {/* Personal Information */}
          <div className="form-group">
            <h2>Personal Information</h2>
            <label htmlFor="firstName">First Name:</label>
            <Field type="text" name="firstName" />
            {errors.firstName && touched.firstName && (
              <div className="error">{errors.firstName}</div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <Field type="text" name="lastName" />
            {errors.lastName && touched.lastName && (
              <div className="error">{errors.lastName}</div>
            )}
          </div>

          {/* Date of Birth */}
          <div className="form-group">
            <label htmlFor="dateOfBirth">Date of Birth:</label>
            <Field type="date" name="dateOfBirth" />
            {errors.dateOfBirth && touched.dateOfBirth && (
              <div className="error">{errors.dateOfBirth}</div>
            )}
          </div>

          {/* Gender */}
          <div className="form-group">
            <label htmlFor="gender">Gender:</label>
            <Field as="select" name="gender">
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Field>
            {errors.gender && touched.gender && (
              <div className="error">{errors.gender}</div>
            )}
          </div>

          {/* Nationality */}
          <div className="form-group">
            <label htmlFor="nationality">Nationality:</label>
            <Field type="text" name="nationality" />
            {errors.nationality && touched.nationality && (
              <div className="error">{errors.nationality}</div>
            )}
          </div>

          {/* LinkedIn */}
          <div className="form-group">
            <h2>Professional Information</h2>
            <label htmlFor="linkedIn">LinkedIn Profile:</label>
            <Field type="text" name="linkedIn" />
            {errors.linkedIn && touched.linkedIn && (
              <div className="error">{errors.linkedIn}</div>
            )}
          </div>

          {/* Portfolio */}
          <div className="form-group">
            <label htmlFor="portfolio">Portfolio (if applicable):</label>
            <Field type="text" name="portfolio" />
            {errors.portfolio && touched.portfolio && (
              <div className="error">{errors.portfolio}</div>
            )}
          </div>

          {/* Education Level */}
          <div className="form-group">
            <h2>Educational Background:</h2>
            <label htmlFor="educationLevel">Highest Level of Education:</label>
            <Field type="text" name="educationLevel" />
            {errors.educationLevel && touched.educationLevel && (
              <div className="error">{errors.educationLevel}</div>
            )}
          </div>

          {/* Educational Institutions */}
          <div className="form-group">
            <label htmlFor="institutions">
              Educational Institutions Attended:
            </label>
            <Field type="text" name="institutions" />
            {errors.institutions && touched.institutions && (
              <div className="error">{errors.institutions}</div>
            )}
          </div>

          {/* Social Media Profiles */}
          <div className="form-group">
            <h2>Social Media Profiles</h2>
            <label htmlFor="twitter">Twitter Handle:</label>
            <Field type="text" name="twitter" />
            {errors.twitter && touched.twitter && (
              <div className="error">{errors.twitter}</div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="instagram">Instagram Profile (if relevant):</label>
            <Field type="text" name="instagram" />
            {errors.instagram && touched.instagram && (
              <div className="error">{errors.instagram}</div>
            )}
          </div>

          {/* Availability */}
          <div className="form-group">
            <h2>Availability</h2>
            <label htmlFor="noticePeriod">
              Notice Period (if currently employed):
            </label>
            <Field type="text" name="noticePeriod" />
            {errors.noticePeriod && touched.noticePeriod && (
              <div className="error">{errors.noticePeriod}</div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="startDate">Preferred Start Date:</label>
            <Field type="text" name="startDate" />
            {errors.startDate && touched.startDate && (
              <div className="error">{errors.startDate}</div>
            )}
          </div>

          {/* Additional Questions */}
          <div className="form-group">
            <h2>Additional Questions</h2>
            <label htmlFor="whyInterested">
              Why are you interested in this position?
            </label>
            <Field as="textarea" name="whyInterested" />
            {errors.whyInterested && touched.whyInterested && (
              <div className="error">{errors.whyInterested}</div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="fitForRole">
              What makes you a good fit for this role?
            </label>
            <Field as="textarea" name="fitForRole" />
            {errors.fitForRole && touched.fitForRole && (
              <div className="error">{errors.fitForRole}</div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="salaryExpectations">Salary Expectations:</label>
            <Field type="text" name="salaryExpectations" />
            {errors.salaryExpectations && touched.salaryExpectations && (
              <div className="error">{errors.salaryExpectations}</div>
            )}
          </div>

          {/* Cover Letter */}
          <div className="form-group">
            <label htmlFor="coverLetter">Cover Letter:</label>
            <Field as="textarea" name="coverLetter" />
            {errors.coverLetter && touched.coverLetter && (
              <div className="error">{errors.coverLetter}</div>
            )}{" "}
          </div>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

          {/* Submission button */}
          <div className="form-group">
            <button type="submit">Submit</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
