import React from "react";
import HeroSection from "./hero-section";
import { Statistics } from "./statistics";
import { PostedJobList } from "./postedJobList";
const Dashboard = () => {
  const employerToken=localStorage.getItem('employerToken')
  return (
    <div>
      { !employerToken &&
      <div>
      <HeroSection />
      <PostedJobList />
      {/* <Statistics /> */}
      </div>
      }
    </div>
  );
};

export default Dashboard;
