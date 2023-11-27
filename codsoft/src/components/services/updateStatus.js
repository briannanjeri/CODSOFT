// Example frontend code using fetch
export const updateApplicationStatus = async (applicationId, status, applicationDetails, setApplicationDetails) => {
  console.log('status', status)
  try {
    const token = localStorage.getItem('token')
    const response = await fetch(`http://localhost:3001/applications/${applicationId}/status`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ status }),
    })

    if (response.ok) {
      // Handle success
      const newStatus = await response.json()
      console.log('statusData', newStatus)
      setApplicationDetails({ ...applicationDetails, status: newStatus })
      console.log('Application status updated successfully')
    } else {
      // Handle error
      console.error('Error updating application status:', response.statusText)
    }
  } catch (error) {
    console.error('Error updating application status:', error.message)
  }
}

// Call the function with applicationId and desired status
