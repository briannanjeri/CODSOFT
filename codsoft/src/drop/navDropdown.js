import React from 'react'
import { Link } from 'react-router-dom'
import '../components/navbar/navbar.css'

export const NavDropDown = ({title, options}) => {
  return (
    <div className='dropdown' >
      <div className="navdropdown-header">{title}</div>
 
        <div className="dropdown-content">
          {options.map((option, index) => (
            <span key={index}>
              {option=='Employer' ?
              <Link to='/employer' style={{  textDecoration: 'none' }} >{option}</Link>
      :         <Link to='/#' style={{  textDecoration: 'none' }} >{option}</Link>}
                </span>
          ))}
        </div>
      
      
    </div>
  )
}


