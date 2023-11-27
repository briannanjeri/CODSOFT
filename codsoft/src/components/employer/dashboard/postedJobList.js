import React from 'react'
import { useEmployerJobContext } from '../job-post/employerJobsContext'
import JobCard from '../jobCard/jobCard'
export const PostedJobList = () => {
  const { employerJobPostings, setEmployerJobPostings } = useEmployerJobContext()
  console.log('employerjobPostingsData', employerJobPostings)

  return (
    <div className="job-listings">
      <div className="recentjobs-title">
        <h2>Your Posted Jobs</h2>
      </div>
      <div className="featuredJobs-container">
        {employerJobPostings.map(job => (
          <div key={job._id} className="job-card">
            <JobCard job={job} />
          </div>
        ))}
      </div>
    </div>
  )
}
