import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddCategory = () => {
    const navigate = useNavigate();

    const [input, setInput] = useState({
        title: "",
    });

    const handleCategory = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        try {
            const res = await axios.post("http://localhost:9000/api/v1/add/category", input,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}` // Include the token in the request headers
                    }
                }

            );
            alert(res.data.message);
            navigate("/home"); // Redirect to the home page after successful registration
            
        } catch (error) {
            alert(error.response.data.message);
        }
    }

    return (
        <>
            <div className="container shadow">
                <h2 className="text-center my-3">Add New Category</h2>
                <div className="col-xl-12 my-3 d-flex items-center justify-content-center">
                    <div className="row">
                        <form onSubmit = {handleCategory}>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="title"
                                    value={input.title}
                                    onChange={(e) =>
                                        setInput({ ...input, [e.target.name]: e.target.value })
                                    }
                                    id="exampleFormControlInput1"
                                    placeholder="Enter Title"
                                />
                            </div>
                            <div className="mb-3">
                                <button type="submit" className="btn btn-primary">Add Category</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddCategory;
