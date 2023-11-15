// DataContext.js
import React, { createContext, useState,useContext, useEffect } from 'react';

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
        const response = await fetch('http://localhost:3001/data'); // Update the endpoint

         if (!response.ok) {
        // Handle non-successful response (e.g., show an error message)
        console.error('Error fetching data:', response.statusText);
        return;
      }
        const data = await response.json();
        console.log('data', data)
        setCategories(data.categories);
        setJobTypes(data.jobTypes);
        setLocations(data.jobLocation)
      } catch (error) {
        console.error('Error fetching data:', error);
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

// Create a custom hook to use the context
export const useDataContext = () => {
  const context = useContext(DataContext);
  console.log('context',context)
  if (!context) {
    throw new Error('useDataContext must be used within a DataProvider');
  }
  return context;
};
