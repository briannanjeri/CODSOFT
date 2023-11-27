import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const ViewApplicationsPage = () => {
  const [applications, setApplications] = useState([])
  console.log('applications', applications)
  const { _id } = useParams()

  useEffect(() => {
    // Fetch job applications when the component mounts
    const fetchApplications = async () => {
      try {
        const token = localStorage.getItem('token')

        const response = await fetch(`http://localhost:3001/jobs/${_id}/applications`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`, // Add your authentication token
          },
        })

        if (response.ok) {
          const data = await response.json()
          console.log('applicationData', data)
          setApplications(data)
        } else {
          console.error('Error fetching job applications:', response.statusText)
        }
      } catch (error) {
        console.error('Error fetching job applications:', error.message)
      }
    }

    fetchApplications()
  }, [_id])

  return (
    <div>
      <h1>View Applications</h1>
      <div>
        {applications.map(application => (
          <div key={application.applicationId}>
            <h3>{application.applicantName}</h3>
            <p>Contact Information: {application.contactInformation}</p>
            <p>Resume: {application.resume}</p>
            <p>Cover Letter: {application.coverLetter}</p>
            <p>Additional Information: {application.additionalInfo}</p>
            {/* Add more details as needed */}
            <Link to={`/applications/${application.applicationId}`}>
              <button>View Full Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ViewApplicationsPage
