import React from 'react'
import HeroArea from './hero-area'
import { SearchInput } from '../searchInput/searchInput'
import { FeaturedJobs } from './featuredJobs'

export const Home = () => {
  return (
    <div>
      <HeroArea />
      <SearchInput isFeatured={true} />
      <FeaturedJobs />
    </div>
  )
}
