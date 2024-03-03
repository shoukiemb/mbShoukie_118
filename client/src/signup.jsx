import React from "react";
import { useState } from "react";
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

function Signup() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:3001/signup", { name, email, password })
            .then((result) => {
                console.log(result)
                navigate("/login");


            })
            .catch(err => console.log(err))
    }

    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>SIGNUP</h2>
                <form onSubmit={handleSubmit}>      {/* Calling handleSubmit function inside onsubmit*/}
                    <div className="mb-3">
                        <label htmlFor="name">
                            <strong>Name</strong>
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter Name"
                            autoComplete="off"
                            name="name"
                            className="form-control rounded"
                            onChange={(e) => setName(e.target.value)}       //Writing here will store as name
                        />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter Email"
                            name="email"
                            className="form-control rounded"
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
                            placeholder="Enter Password"
                            name="password"
                            className="form-control rounded"
                            onChange={(e) => setPassword(e.target.value)}   //Writing here will store as pword
                        />
                    </div>
                    <button type="submit" className="btn btn-dark w-100 rounded">
                        SIGNUP
                    </button>
                </form>
                <p className="mt-3 border-top border-dark-subtle">Already have an Account</p>
                <Link to="/login" className="btn btn-default border w-100 bg-light rounded text-decoration-none">
                    LOGIN
                </Link>

            </div>
        </div>
    )
}

export default Signup;