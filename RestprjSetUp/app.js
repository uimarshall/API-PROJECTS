const express = require('express');
const app = express();
const routes = require('./routes/controller')
 // Serve Static files
app.use(express.static('public'));
// The 'routes' is a MIDDLEWARE bc once the req is sent, it hits the express app, the app then handsover to 
// the req to d req handlers(Middleware), the 'response' is then sent
app.use(routes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
	console.info(`Server is running on ${PORT}`);
})