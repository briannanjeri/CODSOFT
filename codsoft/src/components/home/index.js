import React from 'react'
import HeroArea from './hero-area'
import { SearchInput } from '../searchInput/searchInput'
import { FeaturedJobs } from './featuredJobs'

const Index = () => {
  return (
    <div>
      <HeroArea/>
      <SearchInput/>
      <FeaturedJobs/>
    </div>
  )
}

export default Index
