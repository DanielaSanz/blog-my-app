const { Schema, model } = require('mongoose');

const postSchema = new Schema({
    title: {
        type: String,
        allowNull: false
    },  
    preface: {
        type: String,
        allowNull: false
    },  
    body: {
        type: String,
        allowNull: false
    },
    author: {
        type: String,
        allowNull: false
    },
    date: {
        type: Date,
        default: Date.now
    }, 

}, {
    timestamps: true
});

module.exports = model('Post', postSchema);