import React from 'react'

const AddBlog = () => {
  return (
    <>
    <div className = "container shadow">
        <h2 className = "text-center my-3">Add New Blog</h2>
<div className="col-xl-12 my-3 d-flex items-center justify-content-center">

    <div className="row">
        <form>
            <div className="mb-3">

                <label  htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder=" Blog Title" />
                </div>
                <div className="mb-3"> 
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Category</label>
                    
                    <select className ="form-control" name="category">
                        <option disabled selected>Select Category</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                    <textarea name="description" className="form-control" placeholder ="Blog Description" rows="3"></textarea>
                    </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Thumbnail</label>
                    <input type="file" className="form-control" id="exampleFormControlInput1" placeholder=" Blog Thumbnail" />
                    </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary">Add Blog</button>
                </div>
        </form>
    </div>
</div>

       
    </div>
    </>
   
  )
}

export default AddBlog
