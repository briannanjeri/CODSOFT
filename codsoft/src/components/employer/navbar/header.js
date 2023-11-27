import React from 'react'
import { Link } from 'react-router-dom'
import { EmployerHeaderDropdown } from '../../../drop/employerHeaderDropdown'
import './style.css'

export const Header = () => {
  const profile = ['Account Settings', 'LogOut']

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <span className="letter-rm">RM</span>
          <span>Recruit</span>
          <span>M</span>{' '}
        </div>

        <div className="nav-links">
          <ul>
            <Link to="/employer/Dashboard">
              <li>Home</li>
            </Link>
            <Link to="/employer/jobPostings">
              <li>Job Posting</li>
            </Link>
            <li>Application Management</li>
            <EmployerHeaderDropdown
              title={<img src="/blank-profile-picture.png" alt="Profile" className="profile-image" />}
              options={profile}
            />
          </ul>
        </div>
      </nav>
    </div>
  )
}
