import React from 'react'
import HeroSection from './hero-section'
import { Statistics } from './statistics'
import { RecentJobPostings } from './recentJobPostings'
const Dashboard = () => {
  return (
    <div>
      <HeroSection />
      <Statistics />
      <RecentJobPostings />
    </div>
  )
}

export default Dashboard
