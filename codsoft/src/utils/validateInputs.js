let formValid = true

const isValidEmail = email => {
  const emailPattern = /^[a-z]+[a-z0-9._-]*@gmail\.com$/
  return emailPattern.test(email)
}

const isValidPassword = password => {
  const passwordRegex = /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/

  return passwordRegex.test(password)
}

export const validateEmail = (email, setEmailError) => {
  if (!email) {
    setEmailError('please enter your email')
    formValid = false
  } else if (!isValidEmail(email)) {
    setEmailError('please enter a valid email')
    formValid = false
  } else {
    setEmailError('')
  }
  return formValid
}

export const validatePassword = (password, setPasswordError) => {
  if (!password) {
    setPasswordError('please enter your password')
    formValid = false
  } else if (!isValidPassword(password)) {
    setPasswordError(
      'Password should be at least 8 characters and include at least one alphabetical character, one numeric digit, and one special character (@$!%*#?&).'
    )
    formValid = false
  } else {
    setPasswordError('')
  }
  return formValid
}

export const validateUsername = (username, setUsernameError) => {
  if (!username) {
    setUsernameError('Username is required')
    return (formValid = false) // Username validation failed, set formValid to false
  } else {
    setUsernameError('')
    return formValid // Email validation passed, maintain the formValid state
  }
}
