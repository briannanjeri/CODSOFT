import React from 'react'
import { Link } from 'react-router-dom'
import { NavDropDown } from '../../drop/navDropdown'
import './navbar.css'
import '../home/style.css'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
export const Navbar = () => {
  const [menuIconDisplay, setMenuIconDisplay] = useState('none')

  const [showmenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showmenu)
  }
  //  const loginOptions = ['Employer', 'Jobseeker', {page:'login'}];
  const registerOptions = ['Employer', 'Jobseeker']
  const pagesOptions = ['FAQs', 'Privacy Policy']
  const CandidateProfileOptions = ['Account-settings', 'Your Applications', 'LogOut']

  const Usertoken = localStorage.getItem('token')

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
          <Link to="/">
            <div className="logo">
              <span className="letter-rm">RM</span>
              <span>Recruit</span>
              <span>M</span>{' '}
            </div>
          </Link>
          {!Usertoken && menuIconDisplay === 'block' && (
            <NavDropDown title="Register" options={registerOptions} className="auth-link" />
          )}{' '}
          {Usertoken && menuIconDisplay === 'block' && (
            <NavDropDown
              title={<img src="/blank-profile-picture.png" alt="Profile" className="profile-image" />}
              options={CandidateProfileOptions}
            />
          )}
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>

        <div className="nav-links">
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/jobListing">
              <li>Job listings</li>
            </Link>
            <NavDropDown title="Pages" options={pagesOptions} />
            <li>About us</li>
            <li>contact us</li>
            {/* <NavDropDown title="Login" options={loginOptions} /> */}
            {!Usertoken && <NavDropDown title="Register" options={registerOptions} />}
            {Usertoken && (
              <NavDropDown
                title={<img src="/blank-profile-picture.png" alt="Profile" className="profile-image" />}
                options={CandidateProfileOptions}
              />
            )}
          </ul>
        </div>

        <div className={showmenu ? 'show' : 'empty'}>
          {showmenu ? (
            <ul>
              <li>
                <Link to="/" onClick={showmenu}>
                  Home
                </Link>
              </li>
              <Link to="/jobListing" onClick={showmenu}>
                <li>Job listings</li>
              </Link>
              <li>
                <Link to="/about" onClick={showmenu}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={showmenu}>
                  contact
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
