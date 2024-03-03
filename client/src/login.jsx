import React from "react";
import { useState } from "react";
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate();

    axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {                     //This will check if it is success and redirect to home page
        e.preventDefault();
        axios.post('http://localhost:3001/login', { email, password })
            .then(result => {

                if (result.data === "Success") {
                    //window.localStorage.setItem("id", result.data.id)
                    navigate('/recipelist')
                }
            })
            .catch(err => console.log(err))
    }




    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>LOGIN</h2>
                <form onSubmit={handleSubmit}>      {/* Calling handleSubmit function inside onsubmit*/}

                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter Email"
                            name="email"
                            className="form-control rounded border-2"
                            onChange={(e) => setEmail(e.target.value)}  //Writing here will store as email
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="**************"
                            name="password"
                            className="form-control rounded border-2"
                            onChange={(e) => setPassword(e.target.value)}   //Writing here will store as pword
                        />
                    </div>
                    <button type="submit" className="btn btn-dark w-100 rounded">
                        LOGIN
                    </button>
                </form>
                <p className="mt-3 border-top border-dark-subtle">New Here? Sign up.</p>
                <Link to="/signup" className="btn btn-default border w-100 bg-light rounded text-decoration-none">
                    SIGNUP
                </Link>

            </div>
        </div>
    )
}

export default Login;