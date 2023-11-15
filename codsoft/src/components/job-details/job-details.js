import React from 'react'
import './style.css'
const JobDetails = () => {
   const job= {
      "id": 1,
      "jobTitle": "Software Engineer",
      "companyName": "TechCo",
      "location": "San Francisco, CA",
      "category": "Information Technology",
      "jobType": "Full-Time",
      "description": "TechCo is seeking a talented Software Engineer to join our innovative team. You'll work on cutting-edge projects and help shape the future of technology.",
      "qualifications": "Bachelor's degree in Computer Science or related field, 3+ years of software development experience, proficiency in Java and Python.",
      "skills": ["Java", "Python", "Web Development", "Problem Solving"],
      "salary": "$100,000 - $120,000 per year",
      "applicationDeadline": "2023-12-15"
    } 
  return (
    <div className="job-details-container">
            <button className='top-applyButton'>Apply</button>

      <h1 className="job-details-title">{job.jobTitle}</h1>
      <p className="job-details-info">{job.companyName} - {job.location}</p>
      <p className="job-details-info">Job Type: {job.jobType}</p>
       <p className="job-details-info">Category: {job.category}</p>
       <div className='job-details'>
       <div className='job-details-description'>
        <h3>job Description</h3>
       <p>Description: {job.description}</p>
       </div>
       <div className='job-details-qualifications'>
        <h3>Qualifications</h3>
         <p> {job.qualifications}</p>
      </div>
     <div className='job-details-skills'>
        <h3>Skills</h3>
      <p>{job.skills.join(', ')}</p>
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
