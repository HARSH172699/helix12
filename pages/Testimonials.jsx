import React from 'react'
import Navbar from '../Components/Navbar'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
import Footer from './Footer';

const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
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
  };


  return (

   <>
   <Navbar/>
   <div className="main464">
       <div className="about">
         <h1 className='animate-charcter hh box animate fadeInUp one fdsgd'>Testimonials</h1>
         <p>Our Team Moves Faster, Keeping you Current on What s Hot</p>
       </div>
    </div>
    <div className="container">
        <div className="mmbf">
      
       
        </div>
    </div>

    <div className='container'>
        <h2>  </h2>
        <Slider {...settings}>
          <div className='kafs'>

           
<img src="client01.png" />

          </div>
          <div className='kafs'>
          <img src="client02.png" />



          </div>
          <div className='kafs'>
          <img src="client003.png" />



          </div>
          <div className='kafs'>
            
          <img src="client004.png" />



          </div>
          <div className='kafs'>
          <img src="client005 (1).png" />
           


          </div>
         
         
          
        </Slider>
      </div>
<div className="testimoniyalf">
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
      <figure className="snip1197">
  <figcaption>
    <blockquote>They are very helpful and have a heart to assist the business. I ve been very pleased with the cooperation and assistance from Helix Tech IT Solutions.</blockquote>
    <div className="arrow"></div>
  </figcaption>
  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample10.jpg" alt="sq-sample10"/>
  <div className="author">
  
  </div>
</figure>

      </div>
      <div className="col-lg-6">
      <figure className="snip1197 hover">
  <figcaption>
    <blockquote>Thank you for the exceptional work in assisting us with our temporary positions. Helix Tech IT Solutions outstanding follow-through during entire process. Extremely expedient in finding us the best qualified ....</blockquote>
    <div className="arrow"></div>
  </figcaption>
  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample33.jpg" alt="sq-sample33"/>
  <div className="author">
    
  </div>
</figure>
      </div>
    </div>
  </div>
</div>
<Footer/>
   </>
  )
}

export default Testimonials