import React from 'react'
import { Navbar } from "./components/navbar/navbar";
import { Home } from './components/home';
import {Routes, Route, useLocation} from 'react-router-dom'
import { Index } from './components/authForm';
import EmployerJobPostingForm from './components/employer/job-post/jobPostingForm';
import Dashboard from './components/employer/dashboard/Dashboard';
import { Header } from './components/employer/navbar/header';
import { JobListing } from './components/job-listing/jobListing';
import JobDetails from './components/job-details/job-details';

function App() {
    const location = useLocation();
  const isEmployerRoute = location.pathname.includes('/employer');

  return (
    <div className="App">
      {!isEmployerRoute && <Navbar/> }
       <Routes>
        <Route path='/' element={<Home/>}></Route>
         <Route path="/employer*" element={<Index/>} ></Route>
        <Route path="/employer/jobPostings" element={<EmployerJobPostingForm/>} ></Route>
        <Route path="/employer/dashboard" element={<Dashboard/>} ></Route>
        <Route path='/job-listing' element={<JobListing/>} ></Route>
        <Route path="/job/:id" element={<JobDetails/>} />
      </Routes>
    </div>
  );
}

export default App;
