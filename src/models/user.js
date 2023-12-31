const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    telegramId: {
        type: String,
        required: true,
        unique: true
    },
    items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'item'
    }],
});

const user = mongoose.model('user', userSchema);

module.exports = user;
