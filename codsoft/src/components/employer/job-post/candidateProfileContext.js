// candidateProfileContext.js
import React, { createContext, useContext, useState, useEffect } from 'react'

const CandidateProfileContext = createContext()

export const CandidateProfileProvider = ({ children }) => {
  const [candidateProfile, setCandidateProfile] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('token')

    const fetchCandidateProfile = async () => {
      try {
        const response = await fetch('http://localhost:3001/candidate/profile', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        })

        if (!response.ok) {
          const data = await response.json()
          throw new Error(data.error)
        }

        const profileData = await response.json()
        console.log('profileData', profileData)
        setCandidateProfile(profileData)
      } catch (error) {
        console.error('Error fetching candidate profile:', error)
      }
    }
    if (token) {
      fetchCandidateProfile()
    }
  }, [])

  return (
    <CandidateProfileContext.Provider value={{ candidateProfile, setCandidateProfile }}>
      {children}
    </CandidateProfileContext.Provider>
  )
}

export const useCandidateProfile = () => {
  const context = useContext(CandidateProfileContext)
  if (!context) {
    throw new Error('useCandidateProfile must be used within an CandidateProfileProvider')
  }
  return context
}
