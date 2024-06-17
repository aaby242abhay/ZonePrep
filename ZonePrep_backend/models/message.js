const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messageSchema = new Schema({
    author : {
        type : Schema.Types.ObjectId,
        ref : "User"
    },
    content : {type : String},
    date : {type : Date},
    type : {type : String}                          //group message or direct message
    
})

module.exports = mongoose.model('Message', messageSchema);