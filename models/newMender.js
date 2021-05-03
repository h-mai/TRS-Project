const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menderSchema = new Schema({
    
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    openingDays: [{
        type: String,
    }], //drop down options day and 24hr time
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

const Company = mongoose.model("Company", menderSchema);

module.exports = Company;
