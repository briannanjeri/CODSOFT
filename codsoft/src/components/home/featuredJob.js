import React from "react";

const FeaturedJob = ({ job }) => {
  return (
    <div>
      <h2>{job.jobTitle}</h2>
      <p>
        {job.companyName}-{job.location}
      </p>
      <p> {job.jobType}</p>
      <p>{job.salary}</p>
      <p>{job.description.slice(0, 80)}</p>
    </div>
  );
};

export default FeaturedJob;
