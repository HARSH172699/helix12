import React from 'react'
import Link from 'next/link'
const Jobseekers = () => {
  return (
	<>
	<div className="mamam">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6 col-12">
                <div className="img-holder">
                <div className="bg"></div>
                <div className="info-holder">
                    <h2>We re ready to help you,<br/><span>at any moment.</span></h2>
                </div>

             </div>
                </div>
                <div className="col-lg-6 col-12">

                <div className="form-holder">
                <div className="form-content">
                    <div className="form-items">
                    <img src="/logo-2.png" alt="logo" className='log2'/>
                    <h3 className='login'>Create an account </h3>
                    <p className='login1'>setup a new account in a minute</p>
                        <form>
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Name"/>
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Number"/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Email address"/>
                                </div>
								<div className="col">
                                    <input type="text" className="form-control" placeholder="Password"/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col">
                                    <textarea className="form-control" placeholder="Address"></textarea>
                                </div>
                            </div>
                            <div className="form-button">
                                <button id="submit" type="submit" className="ibtn extra-padding">Sign Up</button>
                                {/* <button id="submit" type="submit" className="ibtn extra-padding">Login</button> */}
                                <p className='sign up'>Already have an account?<Link href='/Login'>Login</Link> </p>
                            </div>
                        </form>
                    </div>
                </div>
</div>

                </div>
            </div>
        </div>
    </div>
	
	</>
  )
}

export default Jobseekers