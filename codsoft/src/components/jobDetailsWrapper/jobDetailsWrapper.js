// JobDetailsWrapper.js
import React from 'react'
import { JobDetailsJobSeeker } from '../job-details/jobDetailsJobSeeker'
import { useParams } from 'react-router-dom'

export const JobDetailsWrapper = () => {
  const { _id } = useParams()

  return (
    <div>
      <JobDetailsJobSeeker jobId={_id} />
    </div>
  )
}
