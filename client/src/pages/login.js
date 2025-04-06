import React ,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Login = () => {

   const navigate = useNavigate()
    const [input, setInput] = useState({
        email: "",
        password: "",
    })
    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        try {
            const response = await axios.post("http://localhost:9000/api/v1/user/login", input);
            localStorage.setItem("token", response.data.token); // Store the token in local storage
            localStorage.setItem("name", response.data.name); // Store the name in local storage
            alert(response.data.message)
            navigate("/home") // Redirect to the login page after successful registration
        }
        catch (error) {
          alert(error.response.data.message)
          }
    }


    // const navigate = useNavigate()`
  return (
   <>
   <div className='container shadow>'> 
    <h2 className='text-center'>Login Here</h2>
    <div className= "col-md-12 my-3 d-flex items-centre justify-content-center">
        <div className ="row">
            <form onSubmit ={handleLogin}>
                
                <div className ="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" 
                    name="email"
                    value={input.email}
                    onChange={(e) => setInput({...input,[e.target.name]:e.target.value})}

                    className="form-control" 
                    id="email"
                     placeholder='Enter your email' />
                    </div>

                    <div className ="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password"
                    name="password"
                    value={input.password}
                    onChange={(e) => setInput({...input,[e.target.name]:e.target.value})}

                     className="form-control" 
                     id="password" 
                     placeholder='Enter your password' />

                    </div>
                <div className ="mb-3">
                    <button type="submit" className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    </div>


   </div>
   </>
  )
}

export default Login
