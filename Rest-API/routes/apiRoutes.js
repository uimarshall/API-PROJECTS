// This is where we will put all the Request handlers like the "get req handler"
const express = require('express');
// get express router for routing to diff pages
const router = express.Router();
// require "Driver" model so as to create an instance of it in the "Post" req etc
// the "Driver" model is in the driver.js file inside the models folder
const Driver = require('../models/driver')
// get a list of ninjas from the db
// mount our routes to the router obj created instead of "app.get"
// this means route to the "/ninjas page"
// 'req' contains info abt the request being made like route params and query strings
router.get('/drivers', function (req, res, next) {
   /* Driver.find({}).then(function(drivers){
        res.send(drivers);
    });*/
    Driver.aggregate([
        {
            // 'geoNear' gives us drivers some km near the coordinates we provide in the form
            $geoNear:{
                near: { type: 'Point', coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)] },
                distanceField: "dist.calculated",
                // give us some drivers within this max dist of 100000
                maxDistance: 100000, 
                spherical: true 
            }

    }]).then(function (drivers) {
        res.send(drivers);
    }).catch(next);
    
});

// set up a route to add a new ninja to db
router.post('/drivers', function (req, res, next) {
    // create an instance of the "Driver" Model,
    // the "driver" variable is just like creating a record or row
    // "req.body" is the data being sent to us in the body of the request
    // var driver = new Driver(req.body);
    // // save to the "driver" db
    // driver.save();
    // "Ninja.create" will do the work of " var driver = new Driver(req.body);" & driver.save();
    // "Ninja.create" returns a promise, so once the action is complete,
    // a callback func is fired that takes the "driver" in the db and send it to us
    // "Driver" is the model we created in driver.js, we call "create mtd" on the
    // Driver model to create a new instance of the Driver Model
    // "req.body" is goin to save the json data attached to the body of the Request to the db
    // we then fire a callback that will send the "driver" so saved to the db back to the user to show that the action is complete
    
    // CREATE A NEW RECORD IN THE Driver coll or model, '.Driver.create()' mtd
    Driver.create(req.body).then(function (driver) {
        res.send(driver);
    }).catch(next);
});

// set up a route to update a ninja in the db
router.put('/drivers/:id', function (req, res, next) {
    Driver.findByIdAndUpdate({_id:req.params.id}, req.body).then(function(){
        Driver.findOne({_id:req.params.id}).then(function(driver){
           res.send(driver); 
        });
        
    });
    
});

// set up a route to Delete a ninja from db
//the :id is route parameter
router.delete('/drivers/:id', function (req, res, next) {
//    console.log(req.params.id);
    Driver.findByIdAndRemove({_id:req.params.id}).then(function(driver){
        res.send(driver);
    });
});

// export the "router" obj - "const router = express.Router();"
// it is the 'router' that has to be exported bc our 'routes' is mounted to the ' const router'
// we export the router to the index.js bc our app is running there so as to gain access to the route
// Connectn to the database willbe initialsed in the index.js also so that our db can run 
module.exports = router