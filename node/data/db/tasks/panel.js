const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Panel');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connect db Panel error:'));

module.exports = mongoose;
