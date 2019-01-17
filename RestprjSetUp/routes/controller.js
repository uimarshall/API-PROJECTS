// The controller will control the routing, either taking data from the db
// and routing it to the views thru 'GET' req OR taking form inputs from the views/public
// and storing it in the db thru 'POST' req
const express = require('express');
const router = express.Router();
const dbConn = require('./db/conn');
 // Initialize request handlers and export it to app.js(where the app is running)
router.get('/', (req, res, next)=>{
	res.send('index.html')

});


// Query Strings
// localhost:3000/contact?name=John&age=30&dept=admin
router.get('/contact', (req, res, next)=>{
	if (req.query.name) {
		res.send(`You have contacted ${req.query.name}`)
	}
	
});

// Request parameters
router.get('/contact/:name', (req, res, next)=>{
	res.send(`Thanks for contacting us! ${req.params.name} will see you`)
	
});


module.exports = router; 