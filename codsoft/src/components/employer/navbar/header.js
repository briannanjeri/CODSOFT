import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { EmployerHeaderDropdown } from '../../../drop/employerHeaderDropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './style.css'

export const Header = () => {
  const [showmenu, setShowMenu] = useState(false)
  const [menuIconDisplay, setMenuIconDisplay] = useState('none')

  const toggleMenu = () => {
    setShowMenu(!showmenu)
  }
  const employerToken = localStorage.getItem('employerToken')
  const profile = ['Account Settings', 'LogOut']

  useEffect(() => {
    // Function to update menuIconDisplay based on screen width
    const handleResize = () => {
      const screenWidth = window.innerWidth
      if (screenWidth <= 768) {
        setMenuIconDisplay('block')
      } else {
        setMenuIconDisplay('none')
      }
    }

    //  cleanup
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div>
      <nav className="navbar">
        <div className="nav-logo-and-auth-options">
          <Link to="/employer/Dashboard">
            <div className="logo">
              <span className="letter-rm">RM</span>
              <span>Recruit</span>
              <span>M</span>{' '}
            </div>
          </Link>
          {employerToken && menuIconDisplay === 'block' && (
            <EmployerHeaderDropdown
              title={<img src="/blank-profile-picture.png" alt="Profile" className="profile-image" />}
              options={profile}
            />
          )}
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
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

        <div className={showmenu ? 'show' : 'empty'}>
          {showmenu ? (
            <ul>
              <li>
                <Link to="/employer/Dashboard" onClick={showmenu}>
                  <li>Home</li>
                </Link>
              </li>
              <Link to="/employer/jobPostings" onClick={showmenu}>
                <li>Job Posting</li>
              </Link>
              <li>
                <Link to="#" onClick={showmenu}>
                  Application Management
                </Link>
              </li>
            </ul>
          ) : (
            ''
          )}
        </div>
      </nav>
    </div>
  )
}
