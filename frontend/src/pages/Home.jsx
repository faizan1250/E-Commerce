import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import Bestseller from '../components/Bestseller'
import Ourpolicy from '../components/Ourpolicy'
import Newsletterbox from '../components/Newsletterbox'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='min-w-[358px]'>
      <Hero/>
      <LatestCollection/>
      <Bestseller/>
      <Ourpolicy/>
      <Newsletterbox/>
      
    </div>
  )
}

export default Home
