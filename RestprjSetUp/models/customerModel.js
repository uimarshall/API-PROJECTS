const mongoose = require('mongoose');
// Create schema
const Schema = mongoose.Schema;
const customerSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	} 
})

const Customer = mongoose.model('customer', customerSchema);
module.exports = Customer;
