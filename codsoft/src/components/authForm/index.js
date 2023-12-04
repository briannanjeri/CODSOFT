import React from "react";
import { useState } from "react";
import { EmployerLoginForm } from "./employerLoginForm";
import { EmployerRegisterForm } from "./employerRegisterForm";

export const Index = () => {
  const [currentform, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div>
      {currentform === "login" ? (
        <EmployerLoginForm onFormSwitch={toggleForm} />
      ) : (
        <EmployerRegisterForm onFormSwitch={toggleForm} />
      )}
    </div>
  );
};
