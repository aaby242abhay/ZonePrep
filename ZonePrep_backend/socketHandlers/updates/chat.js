const Conversation = require('../../models/conversation');
const serverStore = require('../../serverStore');

const updateChatHistory = async (conversationId, toSpecifiedSocketId = null) => {

    const conversation = await Conversation.findById(conversationId).populate({
        //hangOn
        path : 'messages',
        model : 'Message',
        populate : {
            path : 'author',
            model : 'User',
            select : 'username _id'
        }
    })

    if(conversation){
        const io = serverStore.getSocketServerInstance();

        if(toSpecifiedSocketId){
            //initial update of chatHistory
            return io.to(toSpecifiedSocketId).emit('direct-chat-history',{
                messages : conversation.messages,
                participants : conversation.participants
            })
        }

        //check if users of this conversation are online
        conversation.participants.forEach( userId =>{
            const activeConnections = serverStore.getActiveConnections(userId.toString());

            //if yes emit to them this update of messages
            activeConnections.forEach(socketId =>{
                io.to(socketId).emit('direct-chat-history',{
                    messages : conversation.messages,
                    participants : conversation.participants
                })
            })

        })
    }
}

module.exports = {updateChatHistory}