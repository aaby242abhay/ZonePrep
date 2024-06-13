const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    mail : {type : String, required : true, unique : true},
    username : {type : String, required : true, unique : true},
    password : {type : String, required : true},
    registration_no : {type : String, required : true, unique : true},
});

module.exports = mongoose.model('User', userSchema);