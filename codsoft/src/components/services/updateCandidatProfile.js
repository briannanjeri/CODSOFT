// candidateProfileContext.js

export const updateCandidateProfile = async (profileData) => {
  const apiUrl = process.env.REACT_APP_API_URL;

  try {
    const token = localStorage.getItem("token");

    // Send request to update candidate profile
    const response = await fetch(`${apiUrl}/updateCandidateProfile`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(profileData),
    });

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.error);
    }

    const updatedProfile = await response.json();
    return updatedProfile;
  } catch (error) {
    console.error("Error updating candidate profile:", error);
  }
};
