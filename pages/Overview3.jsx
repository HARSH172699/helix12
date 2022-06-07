import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
import {FaArrowRight } from "react-icons/fa";

const Overview3 = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };


  return (
   <>
   <div className="cony">
     
<div className="over3">
<h3>Benefits of Helix Tech IT</h3>
<h2>Advantages of Working With Us</h2>
</div>
<div className="maijn">
        <Slider {...settings}>
          <div>
           <div className="maii">
               <img src="/icon-47.png"/>
               <h3>Full-time & Long Term Job Placements</h3>
               <p>Get directly hired by the client on there W2 ...</p>
           <div className="linkk"><Link href='/Alumni'><FaArrowRight></FaArrowRight></Link>More Details</div>   
         
           </div>
          </div>
          
          <div>
            <div className="maii1">
          <img src="/icon-28.png"/>
          <h3>Best in Market Referral Programme</h3>
          <p>With our best in market referral programs, get your ...</p>
          <div className="linkk"><Link href='/Alumni'><FaArrowRight></FaArrowRight></Link>More Details</div>   
          </div>
          </div>
          
          <div>
            <div className="maii2">
          <img src="/icon-44.png"/>
          <h3>Immediate H1B Transfer</h3>
          <p>If you are looking to change your Employer, we</p>
          <div className="linkk"><Link href='/Alumni'><FaArrowRight></FaArrowRight></Link>More Details</div>   
          </div>
          </div>
          <div>
            <div className="maii3">
          <img src="/icon-45.png"/>
          <h3>Competitive Salary</h3>
          <p>Best in class Salary, even if you are a ...</p>
          <div className="linkk"><Link href='/Alumni'><FaArrowRight></FaArrowRight></Link>More Details</div>   
          </div>
          </div>
          <div>
            <div className="maii4">
          <img src="/icon-46.png"/>
          <h3>Easy Sponsorships</h3>
              <p>We place you where you get sponsored .</p>
                <div className="linkk"><Link href='/Alumni'><FaArrowRight></FaArrowRight></Link>More Details</div>   
          </div>
          </div>
          
          
          
        </Slider>
        </div>
        </div>
      </>
  )
}

export default Overview3