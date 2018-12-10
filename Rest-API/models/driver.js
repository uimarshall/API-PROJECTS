// Model & Schemas in Mongodb

// Models = collections(table) in mongodb, like "Users" table
// User model will rep a collection of users

// SCHEMAS
// Schemas def the structure of our data obj,it defs how each object that is goin be stored will look like e.g "String"
// e.g {
//     name: String,
//     rank: String,
//     Availability: Boolean
// }

// mongoose(DEPENDENCY)

// 1. It adds a layer of mtds to easily SVGFEFuncAElement, edit, retrieve and delete
// data from mongodb
// 2. Allows us to create Models & Schemas easily
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create driver Schema & model
const DriverSchema = new Schema({
    name:{
        type: String,
        required: [true, 'Name field is required']
    },
    rank:{
        type: String
    },
    available:{
        type: Boolean,
        default: false
    },
    // add in geo location
});

// Create the "driver" table/model according to the specified schema "DriverSchema", it will appear as "drivers"
const Driver = mongoose.model('driver', DriverSchema);

// Export the created "Driver" Model
module.exports = Driver;