import React from "react";
import { SearchInput } from "../searchInput/searchInput";
import joblistings from "../../utils/featuredJobs.json";
import FeaturedJob from "../home/featuredJob";
import { useJobPostingContext } from "../employer/job-post/jobPostingContext";
import "./style.css";

export const JobListing = () => {
  const jobs = joblistings.featuredJobs;
  const { jobPostings, setJobPostings } = useJobPostingContext();

  return (
    <div className="job-listing-container">
      <div className="job-listing-hero-area">
        <div>
          <h1>welcome to your Dream carreer</h1>
          <h2>Discover exciting job opportunities from top companies</h2>
        </div>
        <div>
          <SearchInput isFeatured={false} />
        </div>
      </div>
      <h1 className="job-listing-title">Browse Exciting Job Opportunities</h1>
      <div className="featuredJobs-container">
        {jobPostings.slice(0, 4).map((job) => (
          <div key={job.id} className="job-card">
            <FeaturedJob job={job} />
          </div>
        ))}
      </div>
    </div>
  );
};
