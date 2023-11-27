export async function applyForJob(values, file, jobId, url, setUrl, setErrorMessage) {
  console.log('applyData', values)
  try {
    const token = localStorage.getItem('token')

    const apiUrl = `http://localhost:3001/jobs/${jobId}/apply`

    const cloudData = new FormData()
    cloudData.append('file', file)
    cloudData.append('upload_preset', 'ssqdx6b5')
    cloudData.append('cloud_name', 'djl1ysnon')
    const cloudinaryResponse = await fetch('https://api.cloudinary.com/v1_1/djl1ysnon/image/upload', {
      method: 'POST',
      body: cloudData,
    })
    if (!cloudinaryResponse.ok) {
      const cloudinaryData = await cloudinaryResponse.json()
      throw new Error(cloudinaryData.error)
    }

    const cloudinaryJsonData = await cloudinaryResponse.json()
    setUrl(cloudinaryJsonData.url)
    console.log('Cloudinary response:', cloudinaryJsonData)

    const formData = new FormData()
    // Append all values to the FormData object
    formData.append('resume', cloudinaryJsonData.url)
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value)
    })

    for (let [key, value] of formData.entries()) {
      console.log(key, value)
    }
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`, // Include the token in the Authorization header
      },
      body: formData,
    })

    if (!response.ok) {
      const data = await response.json()
      setErrorMessage(data.error)
      console.log('applicationdata', data)

      throw new Error(data.error)
    }

    const data = await response.json()
    setErrorMessage(null)
    console.log('Job application successful:', data)
  } catch (error) {
    console.error('Error applying for the job:', error)
    setErrorMessage(error.message)
  }
}
