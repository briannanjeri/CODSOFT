import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const ViewApplicationsPage = () => {
  const [applications, setApplications] = useState([])
  console.log('applications', applications)
  const { _id } = useParams()
  const apiUrl = process.env.REACT_APP_API_URL

  useEffect(() => {
    // Fetch job applications when the component mounts
    const fetchApplications = async () => {
      try {
        const token = localStorage.getItem('employerToken')

        const response = await fetch(`${apiUrl}/jobs/${_id}/applications`, {
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
            <h2>{application.title}</h2>
            <h3>{application.applicantName}</h3>
            <p>Contact Information: {application.contactInformation}</p>
            <p>Resume: 
            <Link>
            {application.resume}
            </Link>
            </p>
            <p>Cover Letter:{application.coverLetter}</p>
            <p>Additional Information: {application.additionalInfo}</p>
            <Link to={`/employer/jobs-applications/${application.applicationId}`}>
              <button>View Full Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ViewApplicationsPage
