// EmployerProfileContext.js
import React, { createContext, useContext, useEffect, useState } from 'react'

const EmployerProfileContext = createContext()

export const EmployerProfileProvider = ({ children }) => {
  const [employerProfile, setEmployerProfile] = useState(null)
  useEffect(() => {
    // Fetch employer profile data here using the token from localStorage
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem('employerToken')
        if (!token) {
          // Handle case where the token is missing
          console.error('No employer token found in localStorage')
          return
        }

        // Replace the following with your actual API endpoint to fetch employer profile
        const response = await fetch('http://localhost:3001/employer/profile', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        })

        if (!response.ok) {
          // Handle the error response
          console.error('Failed to fetch employer profile data')
          return
        }

        const data = await response.json()
        console.log('employerData', data)
        setEmployerProfile(data) // Assuming data is an object with employer profile details
      } catch (error) {
        console.error('Error fetching employer profile data:', error)
      }
    }

    fetchProfileData()
  }, [])

  return (
    <EmployerProfileContext.Provider value={{ employerProfile, setEmployerProfile }}>
      {children}
    </EmployerProfileContext.Provider>
  )
}

export const useEmployerProfile = () => {
  const context = useContext(EmployerProfileContext)
  if (!context) {
    throw new Error('useEmployerProfile must be used within an EmployerProfileProvider')
  }
  return context
}
