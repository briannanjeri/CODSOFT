import React, { createContext, useContext, useState, useEffect } from 'react'

export const JobPostingsContext = createContext()

export const JobPostingsProvider = ({ children }) => {
  const [jobPostings, setJobPostings] = useState([])

  const fetchJobPostings = async () => {
    try {
      const response = await fetch('http://localhost:3001/jobPostings')
      if (!response.ok) {
        throw new Error('Failed to fetch job postings')
      }

      const data = await response.json()

      setJobPostings(data)
      console.log('jobPostingsData', jobPostings)
    } catch (error) {
      console.error('Error fetching job postings:', error)
      throw error
    }
  }

  useEffect(() => {
    fetchJobPostings()
  }, []) // Empty dependency array to run the effect once when the component mounts

  return <JobPostingsContext.Provider value={[jobPostings, setJobPostings]}>{children}</JobPostingsContext.Provider>
}
