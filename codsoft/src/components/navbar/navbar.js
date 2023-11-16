import React from "react";
import { Link } from "react-router-dom";
import { NavDropDown } from "../../drop/navDropdown";
import "./navbar.css";
import '../home/style.css'
export const Navbar = () => {
  //  const loginOptions = ['Employer', 'Jobseeker', {page:'login'}];
  const registerOptions = ['Employer', 'Jobseeker' ];
  const pagesOptions = ['FAQs', 'Privacy Policy'];
  return (
    <div>
      <nav className="navbar">
          <Link to='/'>
        <div className="logo">
          <span className="letter-rm">RM</span>
          <span>Recruit</span>
          <span>M</span>{" "}
        </div>
          </Link>

        <div className="nav-links">
          <ul>
            <Link to='/'>
            <li>Home</li>
            </Link>
            <Link to='/jobListing'>
            <li>Job listings</li>
            </Link>
               <NavDropDown title="Pages" options={pagesOptions} />
             <li>About us</li>
            <li>contact us</li>
            {/* <NavDropDown title="Login" options={loginOptions} /> */}
           <NavDropDown title="Register" options={registerOptions} />
          </ul>
        </div>
      </nav>
    </div>
  );
};
