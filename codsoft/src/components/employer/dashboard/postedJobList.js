import React from 'react'
import recentJobsPosted from '../../../utils/featuredJobs.json'
import FeaturedJob from '../../home/featuredJob'
import { useJobPostingContext } from '../job-post/jobPostingContext'
import JobCard from '../jobCard/jobCard'
export const PostedJobList = () => {
  const { allJobsPosted, setAllJobsPosted } = useJobPostingContext()

  return (
    <div className="job-listings">
      <div className="recentjobs-title">
        <h2>Your Posted Jobs</h2>
      </div>
      <div className="featuredJobs-container">
        {allJobsPosted.map(job => (
          <div key={job._id} className="job-card">
            <JobCard job={job} />
          </div>
        ))}
      </div>
    </div>
  )
}
