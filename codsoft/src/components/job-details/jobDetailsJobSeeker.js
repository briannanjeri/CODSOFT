import React, { useState, useEffect } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'
export const JobDetailsJobSeeker = ({ jobId }) => {
  const navigate = useNavigate()

  const [job, setJob] = useState(null)
  const [loading, setLoading] = useState(true)

  const isLoggedIn = localStorage.getItem('token') !== null

  const handleApplyClick = () => {
    if (!isLoggedIn) {
      localStorage.setItem('pendingApplication', 'true')
    }
    localStorage.setItem('jobId', jobId)

    if (isLoggedIn) {
      navigate(`/jobs/${jobId}/apply`)
    } else {
      navigate('/jobSeeker')
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/jobs/${jobId}`)
        if (!response.ok) {
          const data = await response.json()
          throw new Error(data.error)
        }

        const data = await response.json()
        console.log('jobdetails', data)

        // Set the job details in the state
        setJob(data)
      } catch (error) {
        console.error('Error fetching job details:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [jobId])

  if (loading) {
    return <div className="job-details-loading">Loading...</div>
  }

  if (!job) {
    return <div className="job-details-error">Error: Job not found</div>
  }

  return (
    <div className="job-details-container">
      <button className="top-applyButton" onClick={handleApplyClick}>
        Apply
      </button>

      <h1 className="job-details-title">{job.jobTitle}</h1>
      <p className="job-details-info">
        {job.companyName} - {job.location}
      </p>
      <p className="job-details-info">Job Type: {job.jobType}</p>
      <p className="job-details-info">Category: {job.category}</p>
      <div className="job-details">
        <div className="job-details-description">
          <h3>job Description</h3>
          <p>Description: {job.jobDescription}</p>
        </div>
        <div className="job-details-qualifications">
          <h3>Qualifications</h3>
          <p> {job.qualifications}</p>
        </div>
        <div className="job-details-requirements">
          <h3>requirements</h3>
          <p> {job.requirements}</p>
        </div>
        <div className="job-details-skills">
          <h3>Skills</h3>
          <p>{job.skills}</p>
        </div>
        <div className="job-details-salary">
          <h3>Salary</h3>
          <p> {job.salary}</p>
        </div>
        <div className="job-details-deadline">
          <h3>Application Deadline</h3>
          <p> {job.applicationDeadline}</p>
          {/* <button className="bottom-applyButton">Apply</button> */}
        </div>
      </div>
    </div>
  )
}
