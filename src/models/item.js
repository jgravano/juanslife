const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
});

const item = mongoose.model('item', ingredientSchema);

module.exports = itemSchema;
