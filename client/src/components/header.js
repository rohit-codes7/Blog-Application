import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('name');    

    const handleLogout = () => {
        // localStorage.removeItem("token");
        // localStorage.removeItem("name"); // Remove specific items from local storage 
        localStorage.clear(); // Clear all local storage items
        alert("Logout Successfully");
        navigate('/login');
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <Link className="navbar-brand text-white mx-3" to="/home">MyBlog</Link>

            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportContent"
                aria-controls="navbarSupportContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportContent">
                <ul className="navbar-nav mr-auto text-white">
                    <li className="nav-item active">
                        <Link className="nav-link text-white" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/add-blog">Add Blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/add-category">Add Category</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/my-blogs">My Blogs</Link>
                    </li>
                </ul>

                <div className="d-inline mx-auto my-2 my-lg-0">
                    {token && token !== null && token !==null ? (
                        <>
                            <button className='btn btn-primary'>
                                Welcome: {user}
                            </button>
                            <button className="btn btn-primary mx-2" onClick={handleLogout}>Logout</button>
                        </>
                    ) : (
                        <>
                            <Link to="/login">
                                <button className="btn btn-primary">Login</button>
                            </Link>
                            <Link to="/register">
                                <button className="btn btn-primary mx-2">Register</button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Header;
