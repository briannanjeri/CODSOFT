let formValid = true;

const isValidEmail = (email) => {
  const emailPattern = /^[a-z]+[a-z0-9._-]*@gmail\.com$/;
  return emailPattern.test(email);
};

const isValidPassword = (password) => {
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*#?&]).{4,}$/;
  return passwordRegex.test(password);
};

export const validateEmail = (email, setEmailError) => {
  let formValid = true;

  if (!email) {
    setEmailError("please enter your email");
    formValid = false;
  } else if (!isValidEmail(email)) {
    setEmailError("please enter a valid email");
    formValid = false;
  } else {
    setEmailError("");
  }
  return formValid;
};

export const validatePassword = (password, setPasswordError) => {
  let formValid = true;

  console.log("isvalidpassword", isValidPassword(password));
  if (!password) {
    setPasswordError("please enter your password");
    formValid = false;
  } else if (!isValidPassword(password)) {
    setPasswordError(
      "Password should include at least one digit or special character (@$!%*#?&), and may contain any combination of characters (uppercase or lowercase), numbers, and special characters.",
    );
    formValid = false;
  } else {
    setPasswordError("");
  }
  return formValid;
};

export const validateUsername = (username, setUsernameError) => {
  let formValid = true;

  if (!username) {
    setUsernameError("Username is required");
    formValid = false; 
  } else {
    setUsernameError("");
  }
  return formValid;
};
