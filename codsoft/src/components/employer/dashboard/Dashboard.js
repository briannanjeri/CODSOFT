import React from 'react'
import HeroSection from './hero-section'
import { Statistics } from './statistics'
import { PostedJobList } from './postedJobList'
const Dashboard = () => {
  return (
    <div>
      <HeroSection />
      <PostedJobList />
      {/* <Statistics /> */}
    </div>
  )
}

export default Dashboard
