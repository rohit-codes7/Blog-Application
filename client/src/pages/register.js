import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:9000/api/v1/user/register", input);
            alert(response.data.message);
            navigate("/login");
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                alert(error.response.data.message);
            } else {
                alert("Something went wrong. Please try again.");
                console.error(error);
            }
        }
    };

    return (
        <div className='container shadow'>
            <h2 className='text-center'>Sign Up Here</h2>
            <div className="col-md-12 my-3 d-flex align-items-center justify-content-center">
                <div className="row">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={input.name}
                                onChange={(e) => setInput({ ...input, name: e.target.value })}
                                className="form-control"
                                id="name"
                                placeholder='Enter your name'
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={input.email}
                                onChange={(e) => setInput({ ...input, email: e.target.value })}
                                className="form-control"
                                id="email"
                                placeholder='Enter your email'
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={input.password}
                                onChange={(e) => setInput({ ...input, password: e.target.value })}
                                className="form-control"
                                id="password"
                                placeholder='Enter your password'
                            />
                        </div>
                        <div className="mb-3">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
