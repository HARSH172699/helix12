import React from 'react'
import {FcManager } from "react-icons/fc";
import {FcBusinessman } from "react-icons/fc";
import {FcGlobe } from "react-icons/fc";
import {FcReadingEbook } from "react-icons/fc";
import {FcDeployment} from "react-icons/fc";
const Home2 = () => {
  return (
    <>
    <section className="main-content">
			<div className="container">
			<h3 className="animate-charcter hh box animate fadeInUp one  gg"> What We Offer </h3>
				

				<div className="row service-row">
					<div className="col-sm-4">
						<div className="section-img">
							<img src="/path.svg" alt="image" className="path-img"/>
							<img src="/service.jpg" alt="image" className="main-img"/>
							{/* <img src="/path.svg" alt="image" className="path-img2"/> */}
							<img src="/path.svg" alt="image" className="path-img3"/>
						</div>
					</div>
					<div className="col-sm-7 offset-sm-1">
						<div className="section-content">
							{/* <div className="section-bit">About our services</div> */}
							{/* <h1 className="section-title gg">What we offer is not just services</h1> */}
							{/* <p className="section-desc">
							We place our candidates maximum in Full-Time Opportunities and we have good ratios where they land a Job for Long Term where they get sponsorship either from our clients or by us.
							</p> */}
							<div className="section-services">
								<div className="row">
									<div className="col-sm-6 section-services_col">
										{/* <i className="fa fa-laptop"><FcManager></FcManager></i> */}
                    Staff Augmentation
									</div>
									<div className="col-sm-6 section-services_col">
										{/* <i className="fa fa-user"><FcBusinessman></FcBusinessman></i> */}
										Software & Web Development
									</div>
									<div className="col-sm-6 section-services_col">
										{/* <i className="fa fa-clock-o"><FcReadingEbook></FcReadingEbook></i> */}
										IT Training
									</div>
									<div className="col-sm-6 section-services_col">
										{/* <i className="fa fa-home"><FcGlobe></FcGlobe></i> */}
                    Immigration Assistance
									</div>
                  {/* <div className="col-sm-6 section-services_col">
										{/* <i class="fa fa-home"><FcDeployment></FcDeployment></i> */}
										{/* Software Development */}
									{/* </div>  */}
								</div>
							</div>
						
						</div>
					</div>
				</div>
			</div>
		</section>
    
    </>
  )
}

export default Home2