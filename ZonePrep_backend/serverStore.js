const {v4 : uuidv4} = require('uuid'); 

const connectedUsers  = new Map();
let activeRooms = [];


let io = null;
const setSocketServerInstance = (ioInstance) =>{
    io = ioInstance;
}
const getSocketServerInstance = () =>{
    return io;
}
const addNewConnectedUser = ({socketId, userId}) => {
    connectedUsers.set(socketId, {userId});
    console.log('connected users:', connectedUsers);
}

const removeConnectedUser = (socketId) => {
    if(connectedUsers.has(socketId)){
        connectedUsers.delete(socketId)
        console.log('new connected users:', connectedUsers);
    }
    
}

const getActiveConnections =(userId) =>{
    const activeConnections = [];
    connectedUsers.forEach(function(value,key){
        if(value.userId === userId){
            activeConnections.push(key);
        }
    })
    return activeConnections;
}

const getOnlineUsers = () => {
    const onlineUsers = [];
    connectedUsers.forEach((value,key) => {
        onlineUsers.push({
            socketId : key,
            userId : value.userId
        })
    })
    return onlineUsers;

}

//rooms
const addNewActiveRoom = (userId, socketId) =>{
    const newActiveRoom = {
        roomCreator : {
            userId, 
            socketId
        },
        participants : [
            {   
                userId,
                socketId
            }
        ],
        roomId : uuidv4()
    }
    activeRooms.push([...activeRooms, newActiveRoom]);
    console.log('new active rooms----->', activeRooms);
    return newActiveRoom;

}

module.exports = {addNewConnectedUser, removeConnectedUser, getActiveConnections, setSocketServerInstance, getSocketServerInstance, getOnlineUsers,
    addNewActiveRoom
};