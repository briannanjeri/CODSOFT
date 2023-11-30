// EmployerProfileContext.js
import React, { createContext, useContext, useEffect, useState } from 'react'

const EmployerProfileContext = createContext()
const apiUrl = process.env.REACT_APP_API_URL

export const EmployerProfileProvider = ({ children }) => {
  const [employerProfile, setEmployerProfile] = useState(null)
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem('employerToken')
        if (!token) {
          console.error('No employer token found in localStorage')
          return
        }

        const response = await fetch(`${apiUrl}/employer/profile`, {
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
        setEmployerProfile(data)
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
