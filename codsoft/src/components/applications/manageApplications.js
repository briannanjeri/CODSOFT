import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const ManageApplications = () => {
  const [applications, setApplications] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const token = localStorage.getItem("employerToken");

        const response = await fetch(`${apiUrl}/applications/all`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, 
          },
        });

        if (response.ok) {
          const data = await response.json();
          console.log("allapplicationData", data);
          setApplications(data);
        } else {
          console.error(
            "Error fetching job applications:",
            response.statusText,
          );
        }
      } catch (error) {
        console.error("Error fetching job applications:", error.message);
      }
    };

    fetchApplications();
  }, []);

  return (
    <div className="job-applications-container">
      <h1>View All Applications</h1>
      <div>
        {applications.map((application) => (
          <div key={application.applicationId} className="job-application-card">
            <h2>Job Title:{application.title}</h2>
            <h3>{application.applicantName}</h3>
            <p>Contact Information: {application.contactInformation}</p>
            <p>
              Resume:
              <Link to={application.resume} className="resume-link">
                {application.resume}
              </Link>
            </p>
            <p>Cover Letter:{application.coverLetter}</p>
            <p>Additional Information: {application.additionalInfo}</p>
            <Link
              to={`/employer/jobs-applications/${application.applicationId}`}
            >
              <button>View Full Details</button>
            </Link>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};
