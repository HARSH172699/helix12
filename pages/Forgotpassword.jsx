import React from 'react'

const Forgotpassword = () => {
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
          <div className=" col-lg-6 col-12">
          <div className="form-holder">
                <div className="form-content">
                    <div className="form-items">
                    <img src="/logo-2.png" alt="logo" className='log2'/>
                    <h3 className='login'>Reset Password </h3>
                    <p className='login1'>Please enter your email address and we will send you a Password link</p>
                        <form>
                           
                        <div className="col">
                                    <input type="text" className="form-control ll" placeholder="Email Id"/>
                                </div>
                            
                            <div className="form-button">
                                <button id="submit" type="submit" className="ibtn extra-padding">Send</button>
                                {/* <button id="submit" type="submit" className="ibtn extra-padding">Login</button> */}
                                {/* <p className='sign up'>Already have an account?<Link href='/Login'>Login</Link> </p> */}
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

export default Forgotpassword