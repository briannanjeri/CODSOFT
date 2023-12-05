// candidateProfileContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const CandidateProfileContext = createContext();
const apiUrl = process.env.REACT_APP_API_URL;

export const CandidateProfileProvider = ({ children }) => {
  const [candidateProfile, setCandidateProfile] = useState(null);
    const [loading, setLoading] = useState(true);
const navigate=useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("token");

  if (!token) {
    console.log('userToken not found in local Storage')
    return;  
  }
    const fetchCandidateProfile = async () => {
      try {
        const response = await fetch(
          `${apiUrl}/candidate/profile`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          },
        );

        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.error);
        }

        const profileData = await response.json();
        setCandidateProfile(profileData);
      } catch (error) {
        console.error("Error fetching candidate profile:", error);
      }
      // finally{
      //   setLoading(false)
      // }
    };
    fetchCandidateProfile();
   
  
  }, []);
//  if (loading) {
//     return <div >Loading...</div>;
//   }

//   if (!candidateProfile) {
//     return <div >Error: candidate profile not found</div>;
//   }
  return (
    <CandidateProfileContext.Provider
      value={{ candidateProfile, setCandidateProfile }}
    >
      {children}
    </CandidateProfileContext.Provider>
  );
};

export const useCandidateProfile = () => {
  const context = useContext(CandidateProfileContext);
  if (!context) {
    throw new Error(
      "useCandidateProfile must be used within an CandidateProfileProvider",
    );
  }
  return context;
};
