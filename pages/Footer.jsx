import React from 'react'

const Footer = () => {
  return (
   <>
   <footer className="section footer-classic context-dark bg-image">
        <div className="container">
          <div className="row row-30">
            <div className="col-md-4 col-xl-5">
              <div className="pr-xl-4"><a className="brand" href="index.html"><img src="logo-2.png"/></a>
                <p classNameName='hkf'>We are an award-winning creative agency, dedicated to the best result in Staff Augmentation, Software & Web Development, IT Training.</p>
          <p className="rights"><span>©  </span><span className="copyright-year">2022</span><span> </span><span>Company</span><span> - </span><span>All Rights Reserved.</span></p>
              </div>
            </div>
            <div className="col-md-4 col-xl-3">
              <div className="linkkkd">
              <h5>Links</h5>
              <ul className="nav-list">
                <li><a href="#">Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Employers</a></li>
                <li><a href="#">Job seekers</a></li>
                <li><a href="#">Services</a></li>
              </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="conn">
              <h5>Contacts</h5>
              <dl className="contact-list">
                <dt>Address:</dt>
                <dd>16192 Coastal Hwy, Lewes, DE-19958, USA</dd>
              </dl>
              <dl className="contact-list">
                <dt>email:</dt>
                <dd><a href="mailto:http://info@helixtechinc.com">info@helixtechinc.com</a></dd>
              </dl>
              <dl className="contact-list">
                <dt>phones:</dt>
                <dd><a href="tel:http://+1%20(424)%20334-1444">+1 (424) 334-1444</a>
                </dd>
              </dl>
            </div>
            </div>
          </div>
        </div>
        <div className="row no-gutters social-container">
          <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-facebook"></span><span>Facebook</span></a></div>
          <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-instagram"></span><span>Instagram</span></a></div>
          <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-twitter"></span><span>Twitter</span></a></div>
          <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-youtube-play"></span><span>Youtube</span></a></div>
        </div>
      </footer>
   
   </>
  )
}

export default Footer