import React from 'react'
import recentJobsPosted from '../../../utils/featuredJobs.json'
import FeaturedJob from '../../home/featuredJob'
import { useJobPostingContext } from '../job-post/jobPostingContext'

export const RecentJobPostings = () => {
  const { allJobsPosted, setAllJobsPosted } = useJobPostingContext();


  return (
    <div className="job-listings">
      <div className="recentjobs-title">
        <h2>Your Posted Jobs</h2>
      </div>
      <div className="featuredJobs-container">
        {allJobsPosted.map(job => (
          <div key={job.id} className="job-card">
            <FeaturedJob job={job} />
          </div>
        ))}
      </div>
    </div>
  )
}
