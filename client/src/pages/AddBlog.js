import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const AddBlog = () => {
    const [input, setInput] = useState({
        title: "",
        category: "",
        description: "",
    })
    const [file, setFile] = useState([null])
    const [categories, setCategories] = useState([])

    const navigate = useNavigate()

    const handleAddBlog = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("title", input.title)
        formData.append("category", input.category)
        formData.append("description", input.description)

        if (file) {
            formData.append("thumbnail", file)
          }        try {
            console.log("Form Data :", input)
            const res = await axios.post("http://localhost:9000/api/v1/add-blog", input, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
    
            alert(res.data?.message || "Blog added successfully")
            navigate("/")
        } catch (error) {
            console.error(" Full Error :", error)
            alert(error.response?.data?.message || "Something went wrong")
        }
    }
    

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await axios.get("http://localhost:9000/api/v1/get/category", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            setCategories(response.data)
        }

        fetchCategories()
    }, [])

    return (
        <div className="container shadow">
            <h2 className="text-center my-3">Add New Blog</h2>
            <div className="col-xl-12 my-3 d-flex items-center justify-content-center">
                <div className="row">
                    <form onSubmit={handleAddBlog}>
                        <div className="mb-3">
                            <label htmlFor="titleInput" className="form-label">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                name="title"
                                id="titleInput"
                                placeholder="Blog Title"
                                value={input.title}
                                onChange={(e) => setInput({ ...input, title: e.target.value })}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="categorySelect" className="form-label">Category</label>
                            <select
                                className="form-control"
                                name="category"
                                id="categorySelect"
                                value={input.category}
                                onChange={(e) => setInput({ ...input, category: e.target.value })}
                            >
                                <option value="">Select Category</option>
                                {
                                    categories && categories.map(item => (
                                        <option key={item._id} value={item._id}>{item.title}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="descriptionTextarea" className="form-label">Description</label>
                            <textarea
                                name="description"
                                className="form-control"
                                id="descriptionTextarea"
                                placeholder="Blog Description"
                                rows="3"
                                value={input.description}
                                onChange={(e) => setInput({ ...input, description: e.target.value })}
                            ></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="thumbnailInput" className="form-label">Thumbnail</label>
                            <input
                                type="file"
                                className="form-control"
                                id="thumbnailInput"
                                name="thumbnail"
                                onChange={(e) => setFile(e.target.files[0])}
                            />
                        </div>
                        <div className="mb-3">
                            <button type="submit" className="btn btn-primary">Add Blog</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddBlog
