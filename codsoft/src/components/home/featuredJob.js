  import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
const FeaturedJob = ({ job }) => {

  
  return (
    <div className="job-container">
      <Link to={`/job/${job._id}`}>
      <h2>{job.jobTitle}</h2>
      <p>
        {job.companyName}-{job.location}
      </p>
      <p> {job.jobType}</p>
      <p>{job.salary}</p>
      {/* <p>{job.jobDescription.slice(0,80)}<span>......</span></p> */}
      </Link>
    </div>
  );
};

export default FeaturedJob;
