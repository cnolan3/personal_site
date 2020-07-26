const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let BlogPost = new Schema({
    title: {
        type: String
    },
    
    body: {
        type: String
    },

    date: {
        type: Date
    }
})