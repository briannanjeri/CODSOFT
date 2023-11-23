
export async function applyForJob(values, file, jobId, url,setUrl) {

  console.log('applyData', values)
  try {
    const token = localStorage.getItem('token')

    const apiUrl = `http://localhost:3001/jobs/${jobId}/apply`


     const cloudData = new FormData();
    cloudData.append('file', file);
    cloudData.append("upload_preset", "ssqdx6b5");
   cloudData.append("cloud_name", 'djl1ysnon');
    const res = await fetch(
        "https://api.cloudinary.com/v1_1/djl1ysnon/image/upload",
        {
          method: "post",
          body: cloudData,
        }
      );

      const jsonData = await res.json();
      setUrl(jsonData.url);
      console.log('jsonData', url)

   const formData=new FormData()
   // Append all values to the FormData object
   formData.append('resume', url);
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value);
    });
      

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
