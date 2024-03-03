import React, { useState } from "react";
import axios from 'axios'


function RecipeSubmission() {

    const [recipe, setRecipe] = useState({
        title: "",
        methodology: "",
        ingredients: "",
        estTime: "",
        imageUrl: "",

    });

    const handleEvent = (event) => {
        const { name, value } = event.target;
        setRecipe({ ...recipe, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(recipe)
        axios.post("http://localhost:3001/recipesubmission", recipe)
            .then((result) => {
                console.log(result);
                alert("Recipe Created!")
            }).catch((err) => console.log(err))
    }

    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>ADD A RECIPE</h2>
                <form onSubmit={handleSubmit}>      {/* Calling handleSubmit function inside onsubmit*/}

                    <div className="mb-3">
                        <label htmlFor="title">
                            <strong>Title</strong>
                        </label>
                        <input
                            type="text"
                            id="title"
                            placeholder="Enter Title"
                            name="title"
                            className="form-control rounded border-2"
                            onChange={handleEvent}  //Writing here will store as email
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="methodology">
                            <strong>Methodology</strong>
                        </label>
                        <input
                            type="text"
                            id="methodology"
                            placeholder="How to cook"
                            name="methodology"
                            className="form-control rounded border-2"
                            onChange={handleEvent}   //Writing here will store as pword
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="ingredients">
                            <strong>Ingredients</strong>
                        </label>
                        <input
                            type="text"
                            id="ingredients"
                            placeholder="Ingredients"
                            name="ingredients"
                            className="form-control rounded border-2"
                            onChange={handleEvent}   //Writing here will store as pword
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="estTime">
                            <strong>Estimated Time</strong>
                        </label>
                        <input
                            type="text"
                            id="estTime"
                            placeholder="Estimated time"
                            name="estTime"
                            className="form-control rounded border-2"
                            onChange={handleEvent}   //Writing here will store as pword
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="image">
                            <strong>Image URL</strong>
                        </label>
                        <input
                            type="text"
                            id="image"
                            placeholder="Image URL"
                            name="imageUrl"
                            className="form-control rounded border-2"
                            onChange={handleEvent}   //Writing here will store as pword
                        />
                    </div>
                    <button type="submit" className="btn btn-dark w-100 rounded">
                        Submit
                    </button>
                </form>


            </div>
        </div>
    )
}

export default RecipeSubmission;