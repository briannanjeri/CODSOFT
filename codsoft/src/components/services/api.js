export const registerEmployer = async values => {
  const apiUrl = process.env.REACT_APP_API_URL

  try {
    const response = await fetch(`${apiUrl}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })

    if (!response.ok) {
      const data = await response.json()
      console.error('error', data.error)
      throw new Error(data.error)
    } else {
      const data = await response.json()

      console.log('Registration successful:', data)
      return data
    }
  } catch (error) {
    console.error(error)
  }
}
