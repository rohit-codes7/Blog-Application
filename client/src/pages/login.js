import React from 'react'

const Login = () => {
  return (
   <>
   <div className='container shadow>'> 
    <h2 className='text-center'>Login Here</h2>
    <div className= "col-md-12 my-3 d-flex items-centre justify-content-center">
        <div className ="row">
            <form>
                
                <div className ="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder='Enter your email' />
                    </div>

                    <div className ="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" placeholder='Enter your password' />

                    </div>
                <div className ="mb-3">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    </div>


   </div>
   </>
  )
}

export default Login
