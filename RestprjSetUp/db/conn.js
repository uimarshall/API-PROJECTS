// mongodb://<dbuser>:<dbpassword>@ds157064.mlab.com:57064/restapi
const mongoose = require('mongoose');
const server = 'ds157064.mlab.com:57064'
const database = 'restapi'
const user = 'restapi'
const password = 'restapi123'
module.exports = mongoose.connect(`mongodb://${user}:${password}@${server}/${database}`);
