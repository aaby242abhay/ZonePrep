const User = require('../../models/users');
const FriendInvitation = require('../../models/friendInvitation');

const serverStore = require('../../serverStore');

updateFriendsPendingInvitations = async (userId) => {
    try{
        //I would like to check if the FriendInvitation model for my id as the recieverId and
        //would like to get username and registration_no of the sender
        const pendingInvitations = await FriendInvitation.find({recieverId : userId}).populate('senderId',' _id username registration_no');


        //find if user of the specific userId has an active connection or not in our connectedUsers Map()
        const recieverList = serverStore.getActiveConnections(userId);
        const io = serverStore.getSocketServerInstance();

        recieverList.forEach((recieverSocketId) =>{
            io.to(recieverSocketId).emit('friends-invitations',{
                pendingInvitations : pendingInvitations? pendingInvitations : []
            })
        })

    }catch(err){
        console.log(err);
    }
}

module.exports = {updateFriendsPendingInvitations}