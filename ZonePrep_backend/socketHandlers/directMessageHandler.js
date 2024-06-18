const Message = require('../models/message');
const Conversation = require('../models/conversation');
const chatUpdates = require('./updates/chat');

const directMessageHandler = async (socket, data) => {
    try{
        console.log('^^^^^^^^^Direct Message Handler^^^^^^^');
        const {userId } = socket.user;
        const {recieverUserId, content} = data;

        //creating the message
        //the message has just arrived, we were listening to the event direct message on the server side of our application
        //now we come to the direct message handler and the first thing we do here is to save the message in our dataBase

        const message = await Message.create({
            content : content,
            author : userId,
            date : new Date(),
            type : 'DIRECT'
        })

        //find if the users have a previous conversation or not if not create a new conversation
        const conversation = await Conversation.findOne({
            participants : {
                $all : [userId, recieverUserId]                     //finding out if there exist a converstation between them or not
            }                                                       //using $all to find out if both the users are present in the participants array
        })                                                          //the order of userId and recieverUserId does not matter

        if(conversation){
            conversation.messages.push(message._id);
            await conversation.save();

            chatUpdates.updateChatHistory(conversation._id.toString());
        }else{
            //if the user and the reveiver have no conversation we will create a new conversation and then send the conversation to the sender and the reciever
            const newConversation = await Conversation.create({
                messages : [message._id],
                participants :  [userId, recieverUserId]
            })
            
            //perform and update to sendder and the reciever if both are online for realtime updates
            chatUpdates.updateChatHistory(newConversation._id.toString());

        }

    }catch(err){
        console.log('Error in directMessageHandler', err)
    }
}

module.exports = directMessageHandler;