import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios'

function RecipeList() {
    const [recipes, setRecipe] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3001/recipelist")
            .then(recipe => setRecipe(recipe.data))
            .catch(err => console.log(err));
    });
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Methodology</th>
                        <th scope="col">Ingredients</th>
                        <th scope="col">Estimated Time</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {recipes.map(recipe => {
                        return <tr>
                            <td>{recipe.title}</td>
                            <td>{recipe.methodology}</td>
                            <td>{recipe.ingredients}</td>
                            <td>{recipe.estTime}</td>

                        </tr>
                    })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default RecipeList;