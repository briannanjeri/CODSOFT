import React, { createContext, useContext, useState, useEffect } from 'react'

// Create a context
const EmployerJobContext = createContext()
const apiUrl = process.env.REACT_APP_API_URL

// Context provider component
export const EmployerJobProvider = ({ children }) => {
  const [employerJobPostings, setEmployerJobPostings] = useState([])

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchJobPostings = async () => {
    try {
      const token = localStorage.getItem('employerToken')
      const response = await fetch(`${apiUrl}/employer/jobPostings`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })

      if (response.ok) {
        const data = await response.json()
        setEmployerJobPostings(data.regularJobPostings)
        console.log('employerjobPostingsData', employerJobPostings)
      } else {
        const data = await response.json()
        throw new Error('Failed to fetch job postings', data.error)
      }
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchJobPostings()
  }, [])

  return (
    <EmployerJobContext.Provider value={{ employerJobPostings, loading, error, fetchJobPostings }}>
      {children}
    </EmployerJobContext.Provider>
  )
}

// Custom hook to use the context
export const useEmployerJobContext = () => {
  return useContext(EmployerJobContext)
}
