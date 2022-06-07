import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../Components/Navbar';
import Home3 from './Home3';
import About1 from './About1';
import About2 from './About2';
import About3 from './About3';
import About4 from './About3';
import About5 from './About5';
import Footer from './Footer';
// import Carasoul from './Carasoul';
const Aboutus = () => {
  return (
    <>
    <Navbar/>
    <div className="main464">
       <div className="about">
         <h1 className='animate-charcter hh box animate fadeInUp one fdsgd'>About Company</h1>
         <p>Industry Leading Information Technology Staffing Services</p>
       </div>
    </div>
   
<About1/>
<About2/>
<About3/>
<About5></About5>
{/* <Footer/> */}
    </>
  )
}

export default Aboutus