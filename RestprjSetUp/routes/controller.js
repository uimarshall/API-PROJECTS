// The controller will control the routing, either taking data from the db
// and routing it to the views thru 'GET' req OR taking form inputs from the views/public
// and storing it in the db thru 'POST' req
const express = require('express');
const router = express.Router();
 // Initialize request handlers and export it to app.js(where the app is running)
router.get('/contact', (req, res)=>{
	res.send('Thanks for contacting us!')
})
module.exports = router; 