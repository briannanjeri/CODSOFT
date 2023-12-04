export async function applyForJob(values, file, jobId, setErrorMessage) {
  try {
    const token = localStorage.getItem("token");
    const apiUrl = process.env.REACT_APP_API_URL;

    // const baseUrl = `${apiUrl}/jobs/${jobId}/apply`

    const cloudData = new FormData();
    cloudData.append("file", file);
    cloudData.append("upload_preset", "ssqdx6b5");
    cloudData.append("cloud_name", "djl1ysnon");
    const cloudinaryResponse = await fetch(
      "https://api.cloudinary.com/v1_1/djl1ysnon/image/upload",
      {
        method: "POST",
        body: cloudData,
      },
    );
    if (!cloudinaryResponse.ok) {
      const cloudinaryData = await cloudinaryResponse.json();
      throw new Error(cloudinaryData.error);
    }

    const cloudinaryJsonData = await cloudinaryResponse.json();

    const updatedValues = { ...values, resume: cloudinaryJsonData.url };

    const response = await fetch(`${apiUrl}/jobs/${jobId}/apply`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, 
      },
      body: JSON.stringify(updatedValues),
    });

    if (!response.ok) {
      const data = await response.json();
      setErrorMessage(data.error);
      throw new Error(data.error);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error applying for the job:", error);
    setErrorMessage(error.message);
  }
}
