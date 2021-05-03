const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({

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
    },
    company: {
        type: String,
        require: null
    }
});


const User = mongoose.model("User", userSchema);

module.exports = User;
