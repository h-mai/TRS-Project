const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menderSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: null
    },
    address: {
        type: String,
        required: true
    },
    openingDays: {
        type: String,
        required: true
    }, //drop down options day and 24hr time
    openingHours: {
        type: String,
        required: true
    },
    repairClass: {
        type: String,
        required: true
    }, //drop down option
    specialty: {
        type: String,
        required: null
    }
});

const Post = mongoose.model("Post", menderSchema);

module.exports = Post;
