import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './style.css'
import { useNavigate } from 'react-router-dom';

const JobDetails = () => {
const navigate=useNavigate()

  const { _id } = useParams();
  console.log('jobId', _id)
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleApplyClick = () => {
    // Assuming the job application process is handled in a different route, navigate to that route
    navigate('/jobApplication'); // Update this with the correct route path
  };

useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulating an API call
        const response = await fetch(`http://localhost:3001/jobs/${_id}`);
         if (!response.ok) {
                  const data = await response.json();
        throw new Error(data.error);
      }

        const data = await response.json();
        console.log('jobdetails', data)

        // Set the job details in the state
        setJob(data);
      } catch (error) {
        console.error('Error fetching job details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [_id]);

  if (loading) {
    return <div className="job-details-loading">Loading...</div>;
  }

  if (!job) {
    return <div className="job-details-error">Error: Job not found</div>;
  }

  return (
    <div className="job-details-container">
            <button className='top-applyButton' onClick={handleApplyClick}>Apply</button>

      <h1 className="job-details-title">{job.jobTitle}</h1>
      <p className="job-details-info">{job.companyName} - {job.location}</p>
      <p className="job-details-info">Job Type: {job.jobType}</p>
       <p className="job-details-info">Category: {job.category}</p>
       <div className='job-details'>
       <div className='job-details-description'>
        <h3>job Description</h3>
       <p>Description: {job.jobDescription}</p>
       </div>
       <div className='job-details-qualifications'>
        <h3>Qualifications</h3>
         <p> {job.qualifications}</p>
      </div>
       <div className='job-details-requirements'>
        <h3>requirements</h3>
         <p> {job.requirements}</p>
      </div>
     <div className='job-details-skills'>
        <h3>Skills</h3>
      <p>{job.skills}</p>
      </div>
      <div className='job-details-salary'>
        <h3>Salary</h3>
      <p> {job.salary}</p>
      </div>
      <div  className="job-details-deadline">
        <h3>Application Deadline</h3>
      <p> {job.applicationDeadline}</p>
      <button className='bottom-applyButton'>Apply</button>
      </div>
</div>

      
    </div>
  )
}

export default JobDetails
