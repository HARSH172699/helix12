import React from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { baseUrl } from "./config";
const Home4 = () => {
  var settings = {
    dots: true,
      fade: true,
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToScroll: 1,
      cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
   <>
   <div className="hh">
     <h2 className='hkj'>Modern Day Staffing Agency</h2>
   </div>
   <div className="main">
  <div className='container' >
        
        <Slider {...settings}>
          
          <div>
          <div className="container">
     <div className="row">
       <div className="col-lg-6 col-12">
         <div className="bf">
           <img src="banner-img-1.png" className=''/>
         </div>
       </div>
       <div className="col-lg-6 col-12">
       <div className="about-content">
            <h6>Find the Employees</h6>
            <h2>Find your ideal candidate on Helix Tech IT Solutions</h2>
            <p>Helix Tech-IT Solutions is your one-stop staff provider, we conduct psychometric and personality testing of candidates to evaluate them in different aspects such as knowledge, expertise, behaviour, experience and others. As we follow an analytical method of recruitment, it enables us to filter thousands of candidates and narrow your search to a selective few that matches best with your work culture.</p>
            {/* <a href="about-us-2.html" className="cr-btn"> */}
              {/* <span>Know More</span> */}
            {/* </a> */}
            <div className="row">
              <div className="col-lg-6 col-7">
                <div className="ha">
<img src="/icon-211.png" className='i211' />
<h4>Understand Your Needs</h4>
</div>
              </div>
              <div className="col-lg-6 col-6">
                <div className="ha">
              <img src="/icon-1163.png" className='i21100' />
              <h4>Find the Perfect Candidate</h4>
              </div>
              </div>
            </div>
          </div>
           
         
       </div>
     </div>
   </div>
          </div>
          <div>
          <div className="container">
     <div className="row">
       <div className="col-lg-6 col-12">
         <div className="bf">
           <img src="banner-img-1.png" className=''/>
         </div>
       </div>
       <div className="col-lg-6 col-12">
       <div className="about-content">
            <h6>Find Your Right Places</h6>
            <h2>Explore your career path with Helix Tech IT Solutions</h2>
            <p>Our Team strives to find the perfect path for you to start your career with by reaching out to the best employers and getting you the best deal.</p>
            {/* <a href="about-us-2.html" className="cr-btn"> */}
              {/* <span>Know More</span> */}
            {/* </a> */}
            <div className="row">
              <div className="col-lg-6 col-7">
                <div className="ha">
<img src="/icon-71.png" className='i211' />
<h4>100% placement</h4>
</div>
              </div>
              <div className="col-lg-6 col-6">
                <div className="ha">
              <img src="/icon-72.png" className='i21100' />
              <h4>Reliable and cost efficient</h4>
              </div>
              </div>
            </div>
          </div>
           
         
       </div>
     </div>
   </div>
          </div>
         
         
          
          
          
        
        </Slider>
      </div>
      </div>
   </>
  )
}

export default Home4