import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
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
            <Link to='/employer/Dashboard'>
            <li>Home</li>
            </Link>
            <Link to='/employer/jobPostings'>
            <li>Job Posting</li>
            </Link>
            <li>Application Management</li>
            <li>Profile</li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
