import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Home7 = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
<div className="mainn">
<div className='container'>
        <h2 className='gfjsd'>What People Are Saying </h2>
        <Slider {...settings}>
        
          <div className="img11">
            <img src="/1.jpg" className='testimoniyal'/>
            <p className='ff'>Working with Helix Tech was a refreshing experience. Before, my company struggled to find an IT professional that matched our needs. After describing the role we needed, Helix’s team was able to provide us with a perfect-fit candidate who has since become one of our most valuable assets. I highly recommend Helix Tech no matter the size or age of your business. </p>
            <h5 className='gfsg'>Kristin Hans </h5>
          </div>
         
         
          
        </Slider>
      </div>
</div>
    </>
  )
}

export default Home7