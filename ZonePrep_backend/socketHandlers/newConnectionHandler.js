const serverStore = require('../serverStore');
const friendsUpdate = require('./updates/friends');
const roomsUpdate = require('./updates/rooms');

const newConnectionHandler = async (socket, io) => {
    const userDetails = socket.user;

    serverStore.addNewConnectedUser({
        socketId: socket.id,
        userId: userDetails.userId
    });

    //updating freind invitation list
    friendsUpdate.updateFriendsPendingInvitations(userDetails.userId);

    friendsUpdate.updateFriends(userDetails.userId);

    //making sure we get the update of all the rooms as soon as we login
    setTimeout(()=>{
        roomsUpdate.updateRooms(socket.id);
    }, [5*1000])
} 

module.exports = newConnectionHandler;