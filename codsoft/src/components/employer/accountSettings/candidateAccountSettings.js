import React, { useState, useEffect } from "react";
import { useCandidateProfile } from "../job-post/candidateProfileContext";
import "./style.css";

export const CandidateAccountSettings = () => {
  const { candidateProfile, setCandidateProfile } = useCandidateProfile();
  const [edit, setEdit] = useState(false);
  const [profileData, setProfileData] = useState({
     firstName: candidateProfile?.firstName,
      lastName: candidateProfile?.lastName,
      dateOfBirth: candidateProfile?.dateOfBirth,
      gender: candidateProfile?.gender,
      nationality: candidateProfile?.nationality,
  });
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    setProfileData({
      firstName: candidateProfile?.firstName,
      lastName: candidateProfile?.lastName,
      dateOfBirth: candidateProfile?.dateOfBirth,
      gender: candidateProfile?.gender,
      nationality: candidateProfile?.nationality,
    });
  }, [candidateProfile]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSaveChanges = async () => {
    try {
      const token = localStorage.getItem("token");
     
      // Check if any changes have been made before sending the request
      const changesMade = Object.keys(profileData).some(
        (key) => profileData[key] !== candidateProfile[key],
      );

      if (!changesMade) {
        alert("no changes made");
        return;
      }
   
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
      setCandidateProfile(updatedProfile);
      setEdit(false); 
    } catch (error) {
      console.error("Error saving changes:", error);
    }
  };

  const handleCancel = () => {
    // Reset profile data to original values
    setProfileData({
      firstName: candidateProfile?.firstName,
      lastName: candidateProfile?.lastName,
      dateOfBirth: candidateProfile?.dateOfBirth,
      gender: candidateProfile?.gender,
      nationality: candidateProfile?.nationality,
    });

    setEdit(false);
  };

  return (
    <div className="form-container">
      <h2>Candidate Profile Settings</h2>
      {edit ? (
        <form>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={profileData.firstName}
            onChange={handleChange}
          />

          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={profileData.lastName}
            onChange={handleChange}
          />

          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <input
            type="text"
            id="dateOfBirth"
            name="dateOfBirth"
            value={profileData.dateOfBirth}
            onChange={handleChange}
          />

          <label htmlFor="gender">Gender:</label>
          <input
            type="text"
            id="gender"
            name="gender"
            value={profileData.gender}
            onChange={handleChange}
          />

          <label htmlFor="nationality">Nationality:</label>
          <input
            type="text"
            id="nationality"
            name="nationality"
            value={profileData.nationality}
            onChange={handleChange}
          />

          <div className="form-buttons">
            <button type="button" onClick={handleSaveChanges}>
              Save Changes
            </button>
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div className="profile-data">
          <p>
            <strong>First Name:</strong> {candidateProfile?.firstName}
          </p>
          <p>
            <strong>Last Name:</strong> {candidateProfile?.lastName}
          </p>
          <p>
            <strong>Date of Birth:</strong> {candidateProfile?.dateOfBirth}
          </p>
          <p>
            <strong>Gender:</strong> {candidateProfile?.gender}
          </p>
          <p>
            <strong>Nationality:</strong> {candidateProfile?.nationality}
          </p>
          <button type="button" onClick={() => setEdit(true)}>
            Edit Profile
          </button>
        </div>
      )}
    </div>
  );
};
