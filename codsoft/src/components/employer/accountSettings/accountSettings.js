import React from "react";
import { useEmployerProfile } from "../job-post/employerProfileContext";
import { useState } from "react";
import "./style.css";
export const AccountSettings = () => {
  const { employerProfile, setEmployerProfile } = useEmployerProfile();
  const [edit, setEdit] = useState(false);
  const apiUrl = process.env.REACT_APP_API_URL;

  const [profileData, setProfileData] = useState({
    firstName: employerProfile.firstName,
    middleName: employerProfile.middleName ,
    lastName: employerProfile.lastName,
    companyName: employerProfile.companyName,
    companyWebsite: employerProfile.companyWebsite ,
    companyDescription: employerProfile.companyDescription ,
    phone: employerProfile.phone ,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleEditClick = () => {
    setEdit(true);
  };

  const handleCancel = () => {
    setEdit(false);
    setProfileData({
      firstName: employerProfile.firstName,
      middleName: employerProfile.middleName ,
      lastName: employerProfile.lastName,
      companyName: employerProfile.companyName,
      companyWebsite: employerProfile.companyWebsite ,
      companyDescription: employerProfile.companyDescription ,
      phone: employerProfile.phone ,
    });
  };

  const handleSaveChanges = async () => {
    try {
      const token = localStorage.getItem("employerToken");
      const changesMade = Object.keys(profileData).some((key) => {
        const hasChanged = profileData[key] !== employerProfile[key];
        if (hasChanged) {
          console.log(`Changed field: ${key}`);
        }
        return hasChanged;
      });

      if (!changesMade) {
        alert("no changes made");
        return;
      }
      const response = await fetch(`${apiUrl}/updateProfile`, {
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

      setEmployerProfile(updatedProfile);
      setEdit(false);
    } catch (error) {
      console.error("Error saving changes:", error);
    }
  };
  return (
    <div className="form-container">
      <h2>Account Settings</h2>

      {!edit ? (
        <div className="profile-data">
          <p>
            <strong>First Name:</strong> {profileData.firstName}
          </p>
          <p>
            <strong>Middle Name:</strong> {profileData.middleName}
          </p>
          <p>
            <strong>Last Name:</strong> {profileData.lastName}
          </p>
          <p>
            <strong>Company Name:</strong> {profileData.companyName}
          </p>
          <p>
            <strong>Company Website:</strong> {profileData.companyWebsite}
          </p>
          <p>
            <strong>Company Description:</strong>{" "}
            {profileData.companyDescription}
          </p>
          <p>
            <strong>Phone:</strong> {profileData.phone}
          </p>
        </div>
      ) : (
        <form>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={profileData.firstName}
              onChange={handleChange}
            />

            <label htmlFor="middleName">Middle Name:</label>
            <input
              type="text"
              id="middleName"
              name="middleName"
              value={profileData.middleName}
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

            <label htmlFor="companyName">Company Name:</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={profileData.companyName}
              onChange={handleChange}
            />

            <label htmlFor="companyWebsite">Company Website:</label>
            <input
              type="text"
              id="companyWebsite"
              name="companyWebsite"
              value={profileData.companyWebsite}
              onChange={handleChange}
            />

            <label htmlFor="companyDescription">Company Description:</label>
            <textarea
              id="companyDescription"
              name="companyDescription"
              value={profileData.companyDescription}
              onChange={handleChange}
            ></textarea>

            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={profileData.phone}
              onChange={handleChange}
            />
            <button
              type="button"
              className="save-button"
              onClick={handleSaveChanges}
            >
              Save Changes
            </button>

            <button
              type="button"
              onClick={handleCancel}
              className="cancel-button"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
      {!edit && <button onClick={handleEditClick}>Edit</button>}
    </div>
  );
};
