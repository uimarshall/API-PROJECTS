// index.js is our entry point in the package.json file
// 1st we require express in this file so we can use interface.
// "./" - means current directory
const express = require('express');
// import the routes file
const routes = require('./routes/apiRoutes');
const bodyParser = require('body-parser');
// set up express app
// when we set up the app, express provides us with bunch of http Request mtds.
const app = express();

// MIDDLEWARE
// When req comes in and hit the express app, it hands it over to the right handler(any of the http mtd)
// to process, then a response will be sent thru the callback func, the diff request handlers are the "MiddleWare"
// we fire the middleware by using "app.use(middleware)"

// put body-parser to help us parse the json data and attach it to the request obj
// so that when we reach the route handler(midleware) it will have access to it
// so "bodyParser helps us attach "data"(to be posted) to the request body
// the bodyParser must come b4 the route handler(app.use('/api', routes);)in the cycle
app.use(bodyParser.json());

// initialize routes
app.use('/api', routes);
// how to handle request sent by our express app
// app.get('/api', function(req, res) {
    // this means send a get req to "localhost:5000/api:
//     console.log('GET request');
//     // "req" obj contains the request info
//     // "res" obj contains the response info such as http status code:200,404 etc
//     // '/api' is the url/route you are sending GET request to
//     // send this response(dummy data) to user in browser
//     res.send({name: 'Mark'}); - this is the response frm server to d client after the request
// });
// listen for request thru port 4000 or port supplied by e.g. heroku in their environ variables
// then fire a call back func once listened
app.listen(process.env.port || 4000, function() {
    console.log('listenening to request');
    
}); 