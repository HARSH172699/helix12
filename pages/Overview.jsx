import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from './Footer'
import Overview1 from './Overview1'
import Overview2 from './Overview2'
import Overview3 from './Overview3'

const Overview = () => {
  return (
      <>
   <Navbar/>
   <div className="main464">
       <div className="about">
         <h1 className='animate-charcter hh box animate fadeInUp one fdsgd'>Job Seekers</h1>
         <p>Your Staffing Needs are Unique and Always Evolving</p>
       </div>
    </div>
    <div className="container">
        <div className="mmbf">
        <h2>A Potential New Career Path</h2>
        <p>Get hired in less time with our extended and vast clients database and top recruiters to get you land your dream job.</p>
        </div>
    </div>
    <Overview1/>
    <Overview2/>
    <Overview3></Overview3>
    <Footer/>
   </>
  )
}

export default Overview