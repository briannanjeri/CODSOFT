import React from 'react'

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
            <li>Home</li>
            <li>Job Posting</li>
            <li>Job Listing</li>
            <li>Application Management</li>
            <li>Profile</li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
