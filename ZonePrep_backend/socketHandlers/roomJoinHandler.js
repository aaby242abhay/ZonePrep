const serverStore = require('../serverStore');
const roomsUpdates = require('./updates/rooms');


const roomJoinHandler = (socket, data) => {
    const {roomId} = data;
    const participantDetails = {
        userId : socket.user.userId,
        socketId : socket.id,
    }
    const roomDetails = serverStore.getActiveRoom(roomId);

    serverStore.joinActiveRoom(roomId, participantDetails);

    //send information to users in room that they should prepare for the incoming connection
    roomDetails.participants.forEach((participant) =>{
        if(participant.socketId !== participantDetails.socketId){           //not sending it to ourselves
            socket.to(participant.socketId).emit('conn-prepare',{
                connUserSocketId : participantDetails.socketId,
            })                                                                  //everyOther user in the room should prepare for the connection and we should inititalise this connection
        }
    }) 


    roomsUpdates.updateRooms();
}

module.exports = roomJoinHandler;