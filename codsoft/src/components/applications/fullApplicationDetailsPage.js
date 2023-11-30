// FullApplicationDetailsPage.js
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ApplicationActions } from './applicationActions'
const FullApplicationDetailsPage = () => {
  const currentStatus = 'pending'
  const [applicationDetails, setApplicationDetails] = useState({})

  const { applicationId } = useParams()
  console.log('applicationId', applicationId)
  const apiUrl = process.env.REACT_APP_API_URL

  useEffect(() => {
    const fetchApplicationDetails = async () => {
      try {
        const token = localStorage.getItem('employerToken')
        const response = await fetch(`${apiUrl}/employer/jobs-applications/${applicationId}`, {
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
          const data = await response.json()

          throw new Error('Error fetching application details:', data.error)
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
