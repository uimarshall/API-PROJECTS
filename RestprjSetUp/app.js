const express = require('express');
const app = express();
const routes = require('./routes/controller')

// To know the next Middleware in the pipeline
app.use((req, res, next)=>{
	console.log(`${new Date().toString()} => ${req.originalUrl}`)
	next();
})
 // Serve Static files
app.use(express.static('public'));
// The 'routes' is a MIDDLEWARE bc once the req is sent, it hits the express app, the app then handsover to 
// the req to d req handlers(Middleware), the 'response' is then sent
app.use(routes);

// Handler for error 404 - Resource not found
app.use((req, res, next)=>{
	res.status(404).send('Check the url and retry')
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
	console.info(`Server is running on ${PORT}`);
})