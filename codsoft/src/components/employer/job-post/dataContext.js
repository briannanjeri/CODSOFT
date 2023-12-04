// DataContext.js
import React, { createContext, useState, useContext, useEffect } from "react";

// Create a context
const DataContext = createContext();

// Create a context provider component
export const DataProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [jobTypes, setJobTypes] = useState([]);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    // Fetch data from your API endpoint
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/data");

        if (!response.ok) {
          console.error("Error fetching data:", response.statusText);
          return;
        }
        const data = await response.json();
        setCategories(data.categories);
        setJobTypes(data.jobTypes);
        setLocations(data.jobLocation);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Run once when the component mounts

  return (
    <DataContext.Provider value={{ categories, jobTypes, locations }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useDataContext must be used within a DataProvider");
  }
  return context;
};
