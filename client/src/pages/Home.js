import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    console.error("No token found in localStorage");
                    return;
                }
                const response = await axios.get("http://localhost:9000/api/v1/get/allBlogs", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setBlogs(response.data);
            } catch (error) {
                console.error("Error fetching blogs:", error.response?.data || error.message);
            }
        };
        fetchBlogs();
    }, []); // Add dependency array to avoid infinite loop

    return (
        <>
            <main className="my-5">
                <div className="container shadow-lg">
                    <section className="text-center">
                        <h2 className="mb-5 my-3">
                            <strong>Latest posts</strong>
                        </h2>
                        <div className="row">
                            {blogs && blogs.length > 0 ? (
                                blogs.map((blog) => (
                                    <div className="col-lg-4 col-md-12 mb-4" key={blog._id}>
                                        <div className="card">
                                            <div>
                                                <img src={`http://localhost:9000/${blog.thumbnail}`} className="card-img-top" alt={blog.title} />
                                                <a href="#!">
                                                    <div className="mask" style={{
                                                        backgroundColor: 'rgba(251, 251, 251, 0.15)',
                                                    }}></div>
                                                </a>
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title">{blog.title}</h5>
                                                <p className="card-text">{blog.description}</p>
                                                <Link to={`/blog/${blog._id}`} className="btn btn-primary">Read more</Link>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <h2 className="text-center">Loading...</h2>
                            )}
                        </div>
                    </section>
                </div>
            </main>

            <footer className="bg-primary text-center text-white mt-5">
                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2025 Copyright:
                    <a className="text-white" href="https://github.com/rohit-codes7">rohit-codes7</a>
                </div>
            </footer>
        </>
    );
};

export default Home;
