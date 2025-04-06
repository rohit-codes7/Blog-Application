import React from 'react'

const AddCategory = () => {
  return (
    <>
    <div className = "container shadow">
        <h2 className = "text-center my-3">Add New Category</h2>
<div className="col-xl-12 my-3 d-flex items-center justify-content-center">
    <div className="row">
        <form>
            <div className="mb-3">
                <label  htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder=" Enter Title" />
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary">Add Category</button>
                </div>
        </form>

    </div>
</div>


    </div>
    </>
  )
}

export default AddCategory
