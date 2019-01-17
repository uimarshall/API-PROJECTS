// ==================================================
// SETUP
// ==================================================
var express = require('express');
var mongoose = require('mongoose');
var logger = require('morgan');
var bodyParser = require('body-parser');
var app = express();

app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: true}));

// ==================================================
// DATABASE SETUP
// ==================================================
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/dogify');
var Schema = mongoose.Schema;
var dogSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	breed:{
		type: String,
		required: true
	}
});

var Dog = mongoose.model('Dog', dogSchema);


// ==================================================
// ROUTES SETUP
// ==================================================
// This code is listening to a 'get' req on forward slash("/")
app.get('/', (req, res)=>{
	res.send('home');
});

app.get('/dogs', (req, res)=>{
	// query all the dogs in "Dog" coll and fire callback to send the dogs found
	Dog.find({}, (err, dogs)=>{
		// the 'dogs' found are displayed as data in 'dog.ejs'(views)
		res.render('dog', {dogs: dogs});
	});
});

app.post('/createDog', (req, res)=>{
	Dog.create({
		name: req.body.name,
		breed: req.body.breed
	}, (err, dog)=>{
		// The redirect will run the 'app.get('/dogs', (req, res)' again & display the dogs
		res.redirect('/dogs');
	});
});

// Handler for error 404 - Resource not found
app.use((req, res, next)=>{
	res.status(404).send('Check the url and retry')
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
	console.info(`Server is running on ${PORT}`);
});