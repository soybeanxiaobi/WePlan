const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Study');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection db Music error:'));

module.exports = mongoose;
