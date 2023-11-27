// FullApplicationDetailsPage.js
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { updateApplicationStatus } from '../services/updateStatus'
import { ApplicationActions } from './applicationActions'
const FullApplicationDetailsPage = () => {
  const currentStatus = 'pending'
  const [applicationDetails, setApplicationDetails] = useState({})

  const { applicationId } = useParams()

  useEffect(() => {
    // Fetch the details of the specific application using the applicationId
    const fetchApplicationDetails = async () => {
      try {
        const token = localStorage.getItem('token')
        const response = await fetch(`http://localhost:3001/applications/${applicationId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })

        if (response.ok) {
          const data = await response.json()
          console.log('applicationDetails', data)
          setApplicationDetails(data)
        } else {
          console.error('Error fetching application details:', response.statusText)
        }
      } catch (error) {
        console.error('Error fetching application details:', error.message)
      }
    }

    fetchApplicationDetails()
  }, [applicationId])

  return (
    <div>
      <h1>Application Details</h1>
      <p>
        <strong>Applicant Name:</strong> {applicationDetails.applicantName}
      </p>
      <p>
        <strong>Contact Information:</strong> {applicationDetails.contactInformation}
      </p>
      <p>
        <strong>Resume:</strong> {applicationDetails.resume}
      </p>
      <p>
        <strong>Cover Letter:</strong> {applicationDetails.coverLetter}
      </p>
      <p>
        <strong>LinkedIn:</strong> {applicationDetails.linkedIn}
      </p>
      <p>
        <strong>Status:</strong> {applicationDetails.status}
      </p>

      {/* Action buttons */}
      <ApplicationActions
        applicationId={applicationId}
        currentStatus={currentStatus}
        applicationDetails={applicationDetails}
        setApplicationDetails={setApplicationDetails}
      />
    </div>
  )
}

export default FullApplicationDetailsPage
