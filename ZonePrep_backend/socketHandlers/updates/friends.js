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

const updateFriends = async (userId) => {
    try{
        //find if user of the specific userId has an active connection or not in our connectedUsers Map()
        const recieverList = serverStore.getActiveConnections(userId);

        if(recieverList.length > 0){
            const user = await User.findById(userId, {_id : 1, friends : 1}).populate(              //finding the user with the specific userId
            'friends',                                                                              //only taking its id and the friends array
            '_id username registration_no'                                                          //populating the friends array with only id, username and registration_no
            )
            let friendsList = [];
            if(user){
                friendsList = user.friends.map( (f) =>{
                    return {
                        id : f._id,
                        registration_no : f.registration_no,
                        username : f.username,
                    }
                })
            }
            //getting the io instance from the serverStore
            const io = serverStore.getSocketServerInstance();
            recieverList.forEach((recieverSocketId) =>{
                io.to(recieverSocketId).emit('friends-list',{
                    friends : friendsList? friendsList : []
                })
            })
        }

       
    }catch(err){
        console.log(err);
    }
}

module.exports = {updateFriendsPendingInvitations, updateFriends}