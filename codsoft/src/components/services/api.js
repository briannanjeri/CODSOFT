export const registerEmployer = async values => {
  try {
    const response = await fetch('http://localhost:3001/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })

    if (!response.ok) {
      console.error('Registration failed:', response.statusText)
      throw new Error('Registration failed')
    } else {
      const data = await response.json()
      console.log('Registration successful:', data)
      return data
    }
  } catch (error) {
    console.error('Error during registration:', error)
    throw error
  }
}
