// candidateProfileContext.js

export const updateCandidateProfile = async profileData => {
  try {
    const token = localStorage.getItem('token')

    // Send request to update candidate profile
    const response = await fetch('http://localhost:3001/updateCandidateProfile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(profileData),
    })

    if (!response.ok) {
      const data = await response.json()
      throw new Error(data.error)
    }

    // Assuming the response contains the updated candidateProfile
    const updatedProfile = await response.json()
    console.log('updatedProfile', updatedProfile)
    return updatedProfile
  } catch (error) {
    console.error('Error updating candidate profile:', error)
  }
}
