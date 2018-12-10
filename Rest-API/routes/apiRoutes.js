// This is where we will put all the Request handlers like the "get req handler"
const express = require('express');
// get express router for routing to diff pages
const router = express.Router();
// get a list of ninjas from the db
// mount our routes to the router obj created instead of "app.get"
// this means route to the "/ninjas page"
router.get('/drivers', function (req, res) {
    res.send({type: 'GET'})
    
});

// set up a route to add a new ninja to db
router.post('/drivers', function (req, res) {
    console.log(req.body);
    res.send({
        type: 'POST',
        name: req.body.name,
        rank:req.body.rank
    });
    
    
});

// set up a route to update a ninja in the db
router.put('/drivers/:id', function (req, res) {
    res.send({type: 'PUT'})
    
});

// set up a route to Delete a ninja from db
router.delete('/drivers/:id', function (req, res) {
    res.send({type: 'DELETE'})
    
});

// export the "router" obj - "const router = express.Router();"

module.exports = router