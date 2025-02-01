import React from 'react'
import Navbar from './shared/Navbar'
import Herosection from './Herosection'
import CategoryCarousel from './CategoryCarousel'
import LatestJobs from './LatestJobs'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Herosection/>
      <CategoryCarousel/>
      <LatestJobs/>
    </div>
  )
}

export default Home
