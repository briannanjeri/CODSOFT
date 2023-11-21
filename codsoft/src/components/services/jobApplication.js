
export async function applyForJob(values, file) {
  console.log('applyData', values)
  try {
    const token = localStorage.getItem('token')

    const apiUrl = 'http://localhost:3001/apply'

   const formData=new FormData()
   // Append all values to the FormData object
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value);
    });
      formData.append('resume', file);

    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`, // Include the token in the Authorization header
      },
      body: formData,
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
