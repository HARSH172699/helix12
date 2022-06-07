import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
const Overview1 = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2,
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
    <div className="container">
     <Slider {...settings}>
     
          <div>
          <div className="row no-gutters portfolios portfolios-h-1">
          <div className="mainhk">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-6 co-12 col-md-6">
                      
  <div className="portfolio">
    <div className="portfoilo-thumb">
      <h2 className='portfoiolo'>Direct Hir</h2>
    </div>
    <div className="portfolio-content">
      <div className="portfolio-content-inner text-center">
      
        <h3>
          <Link href="/DirectHire">Direct Hire</Link>
        </h3>
      </div>
    </div>
  </div>

                      </div>
                      <div className="col-lg-6 co-12 col-md-6">
                     
  <div className="portfolio">
    <div className="portfoilo-thumb">
    <h2 className='portfoiolo'>Contract to Hire</h2>
    </div>
    <div className="portfolio-content">
      <div className="portfolio-content-inner text-center">
       
        <h3>
        <Link href="/DirectHire">Contract to Hire</Link>
        </h3>
      </div>
    </div>
  </div>

                          </div>
                  </div>
              </div>
          </div>
          </div>
          </div>
          <div>
          <div className="row no-gutters portfolios portfolios-h-1">
          <div className="mainhk">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-6 co-12 col-md-6">
                      
  <div className="portfolio">
    <div className="portfoilo-thumb">
    <h2 className='portfoiolo'>Permanent Hire</h2>
    </div>
    <div className="portfolio-content">
      <div className="portfolio-content-inner text-center">
        
        <h3>
        <Link href="/DirectHire">Permanent Hire</Link>
        </h3>
      </div>
    </div>
  </div>

                      </div>
                      <div className="col-lg-6 co-12 col-md-6">
                     
  <div className="portfolio">
    <div className="portfoilo-thumb">
    <h2 className='portfoiolo'>DTemp-To-Hire</h2>
    </div>
    <div className="portfolio-content">
      <div className="portfolio-content-inner text-center">
        
        <h3>
        <Link href="/DirectHire">DTemp-To-Hire</Link>
        </h3>
      </div>
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
    
    </>
  )
}

export default Overview1