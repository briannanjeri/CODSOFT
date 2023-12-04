import React, { useState, useEffect } from "react";

export const YourApplications = () => {
  const [applications, setApplications] = useState([]);
  console.log("applications", applications);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(
          `${apiUrl}/candidate/applications`,
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
          setApplications(data);
        } else {
          const data = await response.json();

          throw new Error("Error fetching user applications:", data.error);
        }
      } catch (error) {
        console.error("Error fetching user applications:", error.message);
      }
    };

    fetchApplications();
  }, []);

  return (
    <div>
      <h2>Your Applications ({applications.length})</h2>
      {applications.map((application) => (
        <div key={application.applicationId}>
          <p>Application ID: {application.applicationId}</p>
          <p>Job Title: {application.jobTitle}</p>
          <p>Status: {application.status}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};
