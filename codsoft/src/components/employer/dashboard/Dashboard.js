import React from "react";
import HeroSection from "./hero-section";
import { Statistics } from "./statistics";
import { PostedJobList } from "./postedJobList";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const navigate=useNavigate()
  const employerToken=localStorage.getItem('employerToken')
  return (
    <div>
      { employerToken ? (
      <div>
      <HeroSection />
      <PostedJobList />
      {/* <Statistics /> */}
      </div>
      ):(
        navigate('/employer')
      )
      }
    </div>
  );
};

export default Dashboard;
