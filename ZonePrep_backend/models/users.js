const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    mail : {type : String, required : true, unique : true},
    username : {type : String, required : true, unique : true},
    password : {type : String, required : true},
    registration_no : {type : String, required : true, unique : true},
    friends : [{type : mongoose.Schema.Types.ObjectId, ref : 'User'}],      //adding the friends field in the user Schema
});

module.exports = mongoose.model('User', userSchema);