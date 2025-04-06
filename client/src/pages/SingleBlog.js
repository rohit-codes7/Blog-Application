import React from 'react'
import { useNavigate } from 'react-router-dom'

const SingleBlog = () => {
    return (
        <>
            <div className="container shadow">
                <div className="col-md-12 d-flex items-center justify-content-center bg-light">
                    <div className="row">
                        <div className="col-md-6 my-3">
                            <img src="https://mdbootstrap.com/img/new/fluid/nature/012.jpg" className="card-img-top" alt="..." />
                        </div>
                        <p className="my-3"> Demo </p>

                    </div>

                </div>
                <button type="submit" className="btn btn-primary my-3">Back to post</button>

        </div >
       
    
    </>
  )
}

export default SingleBlog
