const mongoose = require("mongoose");
const db = require("../models");
const { getMaxListeners } = require("../models/newBreaker");

mongoose.connect(process.env.MONGODB_URI ||
    "mongodb://localhost/TRS-Project");

const breakerSeed = [
    {
        firstName: "Joe",
        lastName: "Schmo",
        email: "helloSchmo@gmail.com",
        phone: "0456123456"

    }
]

const menderSeed = [
    {
        firstName: "Annie",
        lastName: "Mender",
        company: "fixers",
        address: "123a Fake Street Fakeville, VIC, 3000",
        openingDays: "Monday - Friday",
        openingHours: "10am - 6pm",
        repairClass: "Apparel",
        specialty: "Streetwear and Sportswear"

    }

]
