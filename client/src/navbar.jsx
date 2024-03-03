import React from "react";
import { Link } from "react-router-dom"

function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">

            <div className="container-fluid">
                <Link className="navbar-brand" to="/">GREAT INDIAN CUISINE</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/recipesubmission">Add a Recipe</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/recipelist">Recipe List</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/userprofile">Your Profile</Link>
                        </li>
                    </ul>
                    <Link to="/signup" className="navbar-text text-decoration-none">
                        Signup/ Login
                    </Link>
                </div>
            </div>
        </nav>

    )
}

export default Navbar;