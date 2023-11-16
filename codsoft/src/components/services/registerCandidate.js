import React from "react";
import {
  validateEmail,
  validatePassword,
  validateUsername,
} from "../../utils/validateInputs";

export const RegisterCandidate = async (
  username,
  email,
  password,
  setUsernameError,
  setEmailError,
  setPasswordError,
  onFormSwitch
) => {
  try {
    const isUsernameValid = validateUsername(username, setUsernameError);
    const isEmailValid = validateEmail(email, setEmailError);
    const isPasswordValid = validatePassword(password, setPasswordError);

    // If any validation fails, stop the registration process
    if (!isUsernameValid || !isEmailValid || !isPasswordValid) {
      return;
    }

    // If all validations pass, proceed with registration
    const registrationData = {
      username,
      email,
      password,
    };

    // Make the API request to register the job seeker
    const response = await fetch('/api/registerJobSeeker', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registrationData),
    });

    if (response.ok) {
      // Registration successful, you may handle the success scenario (e.g., show a success message, redirect to login page)
      console.log('Job seeker registered successfully');
    onFormSwitch("login");

    } else {
      // Registration failed, handle the error (e.g., show an error message)
      console.error('Job seeker registration failed');
    }
  } catch (error) {
    // Handle any unexpected errors
    console.error('Error during job seeker registration:', error);
  }
};


