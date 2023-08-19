const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    ingredients: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'item'
    }],
    description: String,
});

const recipe = mongoose.model('recipe', recipeSchema);

module.exports = recipe;
