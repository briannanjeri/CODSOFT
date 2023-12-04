import React from "react";
import { useState } from "react";

export const DropDown = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="dropdown">
      <div className="dropdown-header">{title}</div>

      <div className="dropdown-content">
        {options.map((option, index) => (
          <span key={index}>{option}</span>
        ))}
      </div>
    </div>
  );
};
