// EmployerProfileContext.js
import React, { createContext, useContext, useEffect, useState } from "react";

const EmployerProfileContext = createContext();
const apiUrl = process.env.REACT_APP_API_URL;

export const EmployerProfileProvider = ({ children }) => {
  const [employerProfile, setEmployerProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem("employerToken");
        if (!token) {
          console.error("No employer token found in localStorage");
          return;
        }

        const response = await fetch('http://localhost:3001/employer/profile', {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          console.error("Failed to fetch employer profile data");
          return;
        }

        const data = await response.json();
        setEmployerProfile(data);
      } catch (error) {
        console.error("Error fetching employer profile data:", error);
      }finally{
        setLoading(false)
      }
    };

    fetchProfileData();
  }, []);

  if (loading) {
    return <div >Loading...</div>;
  }

  if (!employerProfile) {
    return <div >Error: Employer profile not found</div>;
  }
  return (
    <EmployerProfileContext.Provider
      value={{ employerProfile, setEmployerProfile }}
    >
      {children}
    </EmployerProfileContext.Provider>
  );
};

export const useEmployerProfile = () => {
  const context = useContext(EmployerProfileContext);
  if (!context) {
    throw new Error(
      "useEmployerProfile must be used within an EmployerProfileProvider",
    );
  }
  return context;
};
