import React from 'react'
import { CandidateAccountSettings } from './candidateAccountSettings'
import { useNavigate } from 'react-router-dom'
export const CandidateAccountWrapper = () => {
    const userToken=localStorage.getItem('token')
    const navigate=useNavigate()
  return (
    <div>
      
        <CandidateAccountSettings/>
    
    </div>
  )
}

