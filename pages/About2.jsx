        import React from 'react'
        import Link  from 'next/link'
        const About2 = () => {
          return (
            <>
             <section id="about-area" className="about-area section-padding-lg bg-grey">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-xl-5 col-lg-6 order-2 order-lg-1">
          <div className="about-content">
            <h6>About Us</h6>
            <h2>Reliable  Cost Efficiant Recruitment Agency</h2>
            <p>Helix Tech-IT Solutions is one of the leading Software Development/Staff Augmentation/IT Staffing services providers in the US. We bring together the clients and the suitable candidates, building a community in the IT industry.</p>
            <Link href="/Aboutus" className="cr-btn">
          <Link href='/Aboutus'><span className='cr-btn'>Know More</span></Link>
            </Link>
          </div>
        </div>
        <div className="col-xl-7 col-lg-6 order-1 order-lg-2">
          <div className="about-image text-center wow fadeInRight" >
            <img className='box animate fadeInRight four' src="/about-2.jpg" alt="about thumb"/>
          </div>
        </div>
      </div>
    </div>
  </section>
            </>
          )
        }
        
        export default About2