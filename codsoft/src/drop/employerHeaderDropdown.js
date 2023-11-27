import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export const EmployerHeaderDropdown = ({ title, options }) => {
  const navigate = useNavigate()

  const handleLogout = () => {
    // Clear user session data (e.g., token)
    localStorage.removeItem('employerToken')

    // Redirect to the login page or any other desired page
    navigate('/employer')
  }
  const employerId = localStorage.getItem('employerToken')
  return (
    <div className="dropdown">
      {employerId && (
        <div>
          <div className="navdropdown-header">{title}</div>
          <div className="dropdown-content">
            {options.map((option, index) => (
              <span key={index}>
                {option === 'Account Settings' && (
                  <Link to="/employer/account-settings" style={{ textDecoration: 'none' }}>
                    {option}
                  </Link>
                )}
                {option === 'LogOut' && <button onClick={handleLogout}>{option}</button>}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
