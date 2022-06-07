import React from 'react'

const Carasoul = () => {
  return (
    <>
    
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/bg2.png" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      
      <h3 className="animate-charcter hh box animate fadeInUp one"> Get the talent you need to succeed </h3>
    
        <p className='pp box animate fadeInUp one'>We bring together skilled IT professionals in North America and businesses seeking tech-savvy experts. At Helix Tech, we understand how difficult it is on both sides of the coin: finding a job as an IT pro and finding talent as a company. We are here to bridge that gap to help individuals and companies reach their goals.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="/bg2.png" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h3 className='animate-charcter hh box animate fadeInUp one'> Your One-Stop-Shop for Rewarding Jobs & Capable Talent </h3>
        <p className='pp box animate fadeInUp one'>It s not easy to find the right IT professionals to keep your business running smoothly…until now! Through our IT staffing solutions, you can get the talent you need within just a few days so your business can get the IT services it needs to compete..</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="/bg2.png" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h3 className='animate-charcter hh box animate fadeInUp one'>Find a rewarding job in IT.</h3>
        <p className='pp box animate fadeInUp one'>Struggling to find a fulfilling, high-paying IT position? You re not alone! It s a highly competitive space and most companies have trouble parsing out exactly what they need. With Helix Tech, you can get seen by countless professionals to land a rewarding position hassle-free</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

export default Carasoul