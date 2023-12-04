import {
  validateEmail,
  validatePassword,
  validateUsername,
} from "../../utils/validateInputs";

export const RegisterCandidate = async (
  e,
  email,
  password,
  username,
  setEmailError,
  setPasswordError,
  setUsernameError,
  onFormSwitch,
) => {
  e.preventDefault();
  try {
    const isUsernameValid = validateUsername(username, setUsernameError);
    const isEmailValid = validateEmail(email, setEmailError);
    const isPasswordValid = validatePassword(password, setPasswordError);
    // If any validation fails, stop the registration process
    if (!isUsernameValid || !isEmailValid || !isPasswordValid) {
      console.log("validation failed");
      return;
    }

    const registrationData = {
      username,
      email,
      password,
    };
    const apiUrl = process.env.REACT_APP_API_URL;

    // Make the API request to register the job seeker
    const response = await fetch(`${apiUrl}/candidate/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registrationData),
    });

    if (response.ok) {
      alert("Job seeker registered successfully");
      onFormSwitch("login");
    } else {
      console.error("Job seeker registration failed");
    }
  } catch (error) {
    console.error("Error during job seeker registration:", error);
  }
};
