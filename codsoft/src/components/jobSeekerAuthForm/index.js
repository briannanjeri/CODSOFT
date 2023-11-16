import React from 'react'
import { useState } from 'react';
import { JobSeekerLoginForm } from './jobSeekerLoginForm';
import { JobSeekerRegisterForm } from './jobSeekerRegisterForm';


export const CandidateIndex = () => {
   const [currentform, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div>
        {currentform === "login" ? (
        <JobSeekerLoginForm onFormSwitch={toggleForm} />
      ) : (
        <JobSeekerRegisterForm onFormSwitch={toggleForm} />
      )}
    </div>
  )
}

