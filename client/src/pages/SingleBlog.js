import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SingleBlog = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [blog, setBlog] = useState({});

    useEffect(() => {
        
        const fetchBlog = async () => {
            const res = await axios.get(`http://localhost:9000/api/v1/get/singleBlog/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                }
            );
            setBlog(res.data);
        };
        fetchBlog();
    }, [id]);

    if (!blog.title) {
        return <h2 className="text-center my-5">Loading blog details...</h2>;
    }

    return (
        <div className="container shadow">
            <div className="col-md-12 d-flex items-center justify-content-center bg-light">
                <div className="row">
                    <div className="col-md-6 my-3">
                        {blog.thumbnail ? (
                            <img 
                                src={`http://localhost:9000/${blog.thumbnail}`} // Ensure the path matches the backend response
                                className="card-img-top" 
                                alt={blog.title || "Blog Thumbnail"} 
                            />
                        ) : (
                            <p>No thumbnail available</p>
                        )}
                    </div>
                    <div className="col-md-6 my-3">
                        <h2>{blog.title}</h2>
                        <p>{blog.description}</p>
                    </div>
                </div>
            </div>
            <button 
                type="button" 
                className="btn btn-primary my-3" 
                onClick={() => navigate("/home")} // Navigate to the correct home page route
            >
                Back to posts
            </button>
        </div>
    );
};

export default SingleBlog;
