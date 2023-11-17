export async function applyForJob(values) {
  console.log('applyData', values)
  try {
    const token = localStorage.getItem('token')

    const apiUrl = 'http://localhost:3001/apply'

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, // Include the token in the Authorization header
      },
      body: JSON.stringify(values),
    })

    if (!response.ok) {
      const data = await response.json()
      console.log('applicationdata', data)

      throw new Error(data.error)
    }

    const data = await response.json()
    console.log('Job application successful:', data)
  } catch (error) {
    console.error('Error applying for the job:', error)
  }
}
