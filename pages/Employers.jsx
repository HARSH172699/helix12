import React from 'react'
import Link from 'next/link'
const Employers = () => {
  return (
   <>
 <div className="main">
     <div className="container-fluid">
         <div className="row">
             <div className="col-lg-6 co-md-6 col-12">
             
            
            <div className="img-holder">
                <div className="bg"></div>
                <div className="info-holder">
                    <h2>We re ready to help you,<br/><span>at any moment.</span></h2>
                </div>

             </div>
             </div>
             <div className="col-lg-6 co-md-6 col-12">



              
                 
             <div className="form-holder">
                <div className="form-content">
                    <div className="form-items">
                    <img src="/logo-2.png" alt="logo33" className='log2'/>
                    <h3 className='login'>Create an account </h3>
                    <p className='login1'>setup a new account in a minute</p>
                        <form>
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Company Name" required />
                                
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Contact Person" required/>
                                </div>
                               
                            </div>
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Contact Number" required/>
                                </div>
                                <div className="col">
                                    <input type="file" className="form-control lll" placeholder="Company Logo" required/>
                                </div>
								
                            </div>
                            <div className="form-row">
                                <div className="col">
                                    <input type="email" className="form-control" placeholder="Email id"required/>
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control lll" placeholder="Password" required/>
                                </div>
								
                            </div>
                            <div className="form-row">
                                
								
                            </div>
                             
                                <div className="col">
                                    <input type="email" className="form-control l" placeholder="Company Address" required/>
                                </div>
                                
                            <div className="form-row">
                                <div className="col">
                                    <textarea className="form-control" placeholder="Company Description" required></textarea>
                                </div>
                            </div>
                            <div className="form-button hln">
                                <button id="submit" type="submit" className="ibtn extra-padding ly">Sign Up</button>
                               
                            </div>
                            <p className='sign up'>Already have an account?<Link href='/Login'>Login here</Link> </p>
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

export default Employers