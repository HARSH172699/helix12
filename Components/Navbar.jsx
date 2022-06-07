import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Link from 'next/link';
const Navbar = () => {
  const [scroll, setScroll] = useState(false);
 useEffect(() => {
   window.addEventListener("scroll", () => {
     setScroll(window.scrollY >50);
   });
 }, []);
  return (
    <>
   <div className={scroll ? "bg-whit" : "bg-black"}>
  
   <div className="container">
     <div className="row">
       <div className="col-lg-2 ">
       <img src="/logo-2.png" alt="logo" className='log1'/>
       </div>
       <div className="col-lg-10 co-12">
         <div className="nav">
  
  <input type="checkbox"/>
    <span></span>
    <span></span>
    
    <div className="menu">
      <li><Link href="/Home">Home</Link></li>
      <li><Link href="/Aboutus">About us</Link></li>
      
      <div className="box">
	<a className="button" href="#popup1"> Employer</a>
</div>

<div id="popup1" className="overlay">
	<div className="popup">
	
  <img src="/logo-2.png" alt="logo33" className='log34'/>
                    <h3 className='loginff'>Create an account </h3>
                    <p className='login1dd'>setup a new account in a minute</p>
  <div className="popp">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-12">
      <input type="text" placeholder='Company Name' className='company'/>
      
        </div>
        <div className="col-lg-6 col-12">
        <input type="text" placeholder='Contact Person' className='companyd'/>
        </div>
        <div className="col-lg-6 col-12">
      <input type="text" placeholder='Contact Number' className='companydf'/>
      
        </div>
        <div className="col-lg-6 col-12">
      <input type="text" placeholder='Email id' className='companydsf'/>
      
        </div>
        <div className="col-lg-6 col-12">
      <input type="text" placeholder='Company Address' className='companydsfsf'/>
      
        </div>
        <div className="col-lg-6 col-12">
      <input type="text" placeholder='Company Description' className='companydfsgf'/>
      
        </div>
        
        <button id="submit" type="submit" className="ibtn extra-padding ly">Sign Up</button>
      </div>
    </div>
  </div>
		<a className="close" href="#">&times;</a>
		<div className="content">
		
		</div>
	</div>
</div>

      {/* <li><Link href="/Employers">Employers</Link></li> */}
     
      <vav>
        <ul>
            <ul>    
            </ul>        
            <li><a href="#">Job seekers</a>
            <ul className='kj'>
            <li className='ll'><Link href="/Overview">overview</Link></li>
                <li className='ll'><Link href="/Placejoborder">Job Openings</Link></li>
                <li className='ll'><Link href="/Testimonials">Testimonials</Link>
                
                </li>
            </ul>
            </li>

        </ul>
</vav>
      <vav>
        <ul>
            <ul>    
            </ul>        
            <li><a href="#">services</a>
            <ul className='kj'>
                <li className='ll'><a href="#"></a></li>
                <li className='ll'><a href="#"></a></li>
                <li className='ll'><a href="#"></a>
                
                </li>
            </ul>
            </li>

        </ul>
</vav>
      
      
     
      <li><Link href="/Login">Login</Link></li>
      
    </div>
    
</div>
       </div>
     </div>
   </div>

</div>

    </>
  )
}

export default Navbar