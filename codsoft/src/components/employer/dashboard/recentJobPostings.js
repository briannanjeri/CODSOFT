import React from 'react'
import recentJobsPosted from '../../../utils/featuredJobs.json'
import FeaturedJob from '../../home/featuredJob'

export const RecentJobPostings = () => {
const recentJobs=recentJobsPosted.featuredJobs

  return (
    <div className='job-listings'>
        <div className='recentjobs-title'>
        <h1>recent job listings</h1>
        </div>
       <div className='featuredJobs-container'>
       {recentJobs.slice(0, 4).map((job)=>(
          <div key={job.id} className='job-card'>
          <FeaturedJob job={job}/>
          </div> 
       ))}
    </div>
    </div>
  )
}

