import React from 'react'
import featuredJobsData from '../../utils/featuredJobs.json'
import FeaturedJob from './featuredJob'
import './style.css'
import { DropDown } from '../../drop/dropDown'
import { useJobPostingContext } from '../employer/job-post/jobPostingContext'

export const FeaturedJobs = () => {
  const {featuredJobPostings,
        setFeaturedJobPostings } = useJobPostingContext();
 

  const featuredJobs = featuredJobsData.featuredJobs
  const jobTypeOptions = ['Full-Time', 'Part-Time', 'Contract']
  const jobLocationOptions = ['Remote', 'Onsite', 'Hybrid']
  const datePostedOptions = ['Today', 'Yesterday', 'Last 7 Days']
  return (
    <div className="job-listings">
      <h1>Featured job listings</h1>
      <div className="categories">
        <DropDown title="Job Type" options={jobTypeOptions} />
        <DropDown title="Job Location" options={jobLocationOptions} />
        <DropDown title="Date Posted" options={datePostedOptions} />
      </div>
      <div className="featuredJobs-container">
        {featuredJobPostings.map(job => (
          <div key={job.id} className="job-card">
            <FeaturedJob job={job} />
          </div>
        ))}
      </div>
    </div>
  )
}
