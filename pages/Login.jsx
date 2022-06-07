import React from 'react'
import Link from 'next/link'
const Login = () => {
  return (
   <>
   
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
                    <h3 className='login'>Login into account</h3>
                    <p className='login1'>Use your credentials to access your account.</p>
                        <form>
                           
                            <div className="form-row">
                                
                            </div>
                            <div className="col">
                                    <input type="text" className="form-control ll" placeholder="Email Id"/>
                                </div>
								<div className="col">
                                    <input type="text" className="form-control ll" placeholder="Password"/>
                                </div>
                            <div className="form-row">
                               
                            </div>
                            <p className='forgot'><Link href='/Forgotpassword'>Forgot Password</Link></p>
                            <div className="form-button">
                            {/* <button id="submit" type="submit" className="ibtn extra-padding">Sign up</button> */}
                                <button id="submit" type="submit" className="ibtn extra-padding">Login</button>
                              <p className='sign up'>Do not have an account?<Link href='/Jobseekers'>Sign up</Link> </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
          </div>
      </div>
  
   
   </>
  )
}

export default Login