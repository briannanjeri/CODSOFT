// Function to save token to local storage
export const saveTokenToLocalStorage = token => {
  localStorage.setItem('token', token)

  // Set a timeout to clear the token after one hour
  // setTimeout(() => {
  //   localStorage.removeItem('token');
  //   console.log('Token expired. Removed from local storage.');
  // }, 60 * 60 * 1000); // 60 minutes * 60 seconds * 1000 milliseconds = 1 hour
}
