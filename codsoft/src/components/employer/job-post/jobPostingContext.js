import React, { createContext, useContext, useState, useEffect } from "react";

export const JobPostingsContext = createContext();
const apiUrl = process.env.REACT_APP_API_URL;
export const JobPostingsProvider = ({ children }) => {
  const [jobPostings, setJobPostings] = useState([]);
  const [featuredJobPostings, setFeaturedJobPostings] = useState([]);
  const [allJobsPosted, setAllJobsPosted] = useState([]);

  const fetchJobPostings = async () => {
    try {
      const response = await fetch(`${apiUrl}/jobPostings`);
      if (!response.ok) {
        throw new Error("Failed to fetch job postings");
      }

      const data = await response.json();

      setJobPostings(data.regularJobPostings);
      setFeaturedJobPostings(data.featuredJobPostings);
      setAllJobsPosted(data.regularJobPostings);
    } catch (error) {
      console.error("Error fetching job postings:", error);
      throw error;
    }
  };

  useEffect(() => {
    fetchJobPostings();
  }, []); // Empty dependency array to run the effect once when the component mounts

  return (
    <JobPostingsContext.Provider
      value={{
        allJobsPosted,
        setAllJobsPosted,
        jobPostings,
        setJobPostings,
        featuredJobPostings,
        setFeaturedJobPostings,
      }}
    >
      {children}
    </JobPostingsContext.Provider>
  );
};
export const useJobPostingContext = () => {
  const context = useContext(JobPostingsContext);
  if (!context) {
    throw new Error("useDataContext must be used within a DataProvider");
  }
  return context;
};
