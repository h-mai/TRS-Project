const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const breakerSchema = new Schema({

    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: null
    }
});


const Post = mongoose.model("Post", breakerSchema);

module.exports = Post;
