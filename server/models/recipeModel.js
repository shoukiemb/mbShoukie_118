const mongoose = require('mongoose')

const recipeSchema = mongoose.Schema({
    title: { type: String },
    methodology: { type: String },
    ingredients: { type: String },
    estTime: { type: String },
    imageUrl: { type: String },

})

const recipeModel = mongoose.model('recipe_entries', recipeSchema)
module.exports = recipeModel;