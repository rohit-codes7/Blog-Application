import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <Link className="navbar-brand text-white mx-3" to="/">MyBlog</Link>

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
                </ul>

                <div className="d-inline mx-auto my-2 my-lg-0">
                    <Link to="/Login">
                        <button className="btn btn-primary ">Login</button>
                    </Link>
                    <Link to="/Register">
                        <button className="btn btn-primary">Register</button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Header;
