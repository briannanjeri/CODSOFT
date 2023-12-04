import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApplicationActions } from "./applicationActions";
import "./style.css";
const FullApplicationDetailsPage = () => {
  const currentStatus = "pending";
  const [applicationDetails, setApplicationDetails] = useState({});

  const { applicationId } = useParams();
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchApplicationDetails = async () => {
      try {
        const token = localStorage.getItem("employerToken");
        const response = await fetch(
          `${apiUrl}/employer/jobs-applications/${applicationId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          },
        );

        if (response.ok) {
          const data = await response.json();
          setApplicationDetails(data);
        } else {
          const data = await response.json();

          throw new Error("Error fetching application details:", data.error);
        }
      } catch (error) {
        console.error("Error fetching application details:", error.message);
      }
    };

    fetchApplicationDetails();
  }, [applicationId]);

  return (
    <div className="application-details-container">
      <h1>Application Details</h1>

      <div className="details-section">
        <div className="detail-row">
          <strong>Applicant Name:</strong> {applicationDetails.applicantName}
        </div>
        <div className="detail-row">
          <strong>Contact Information:</strong>{" "}
          {applicationDetails.contactInformation}
        </div>
        <div className="detail-row">
          <strong>Education Level:</strong> {applicationDetails.educationLevel}
        </div>
        <div className="detail-row">
          <strong>Why Interested:</strong>
          <div className="multiline-text">
            {applicationDetails.whyInterested}
          </div>
        </div>
        <div className="detail-row">
          <strong>FitForRole:</strong>
          <div className="multiline-text">{applicationDetails.fitForRole}</div>
        </div>
        <div className="detail-row">
          <strong>Salary Expectations:</strong>{" "}
          {applicationDetails.salaryExpectations}
        </div>
        <div className="detail-row">
          <strong>Resume:</strong> {applicationDetails.resume}
        </div>
        <div className="detail-row">
          <strong>Cover Letter:</strong>
          <div className="multiline-text">{applicationDetails.coverLetter}</div>
        </div>
        <div className="detail-row">
          <strong>LinkedIn:</strong> {applicationDetails.linkedIn}
        </div>
        <div className="detail-row">
          <strong>Status:</strong> {applicationDetails.status}
        </div>
      </div>

      {/* Action buttons */}
      <div className="application-actions-container">
        <ApplicationActions
          applicationId={applicationId}
          currentStatus={currentStatus}
          applicationDetails={applicationDetails}
          setApplicationDetails={setApplicationDetails}
        />
      </div>
    </div>
  );
};

export default FullApplicationDetailsPage;
