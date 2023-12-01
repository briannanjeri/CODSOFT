import React from 'react'
import { useJobPostingContext } from '../employer/job-post/jobPostingContext'
import './style.css'

export const SearchInput = ({ isFeatured }) => {
  const { jobPostings, setJobPostings, setFeaturedJobPostings, allJobsPosted, setAllJobsPosted } =
    useJobPostingContext()

  const handleSearch = e => {
    e.preventDefault()
    const jobTitleKeyword = e.target.form[0].value
    const locationKeyword = e.target.form[1].value

    const titleRegex = new RegExp(jobTitleKeyword, 'i')
    const locationRegex = new RegExp(locationKeyword, 'i')

    const filteredJobs = allJobsPosted.filter(job => {
      const titleMatch = titleRegex.test(job.jobTitle)
      const locationMatch = locationRegex.test(`${job.city},${job.location}, ${job.state}`)

      return titleMatch && locationMatch
    })
    console.log('filteredjobs', filteredJobs)
    if (isFeatured) {
      setFeaturedJobPostings(filteredJobs)
    } else {
      setJobPostings(filteredJobs)
    }
  }

  return (
    <form>
      <div className="search">
        <div className="search-bar">
          <input type="text" placeholder="Job title or keyword" />
          <input type="text" placeholder="Search city, state or remote" />
          <button onClick={e => handleSearch(e)}>Search Jobs</button>
        </div>
      </div>
    </form>
  )
}
