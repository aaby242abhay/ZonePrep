import io from 'socket.io-client';
import {setPendingFriendInvitations, setFriends, setOnlineUsers} from '../store/actions/friendsActions';
import store from '../store/store';
import {updateDirectChatHistoryIfActive} from '../shared/utils/chat';
import * as roomHandler from './roomHandler';
import * as webRTCHandler from './webRTCHandler';

let socket = null;
export const connectWithSocketServer = (userDetails) =>{
    const jwtToken = userDetails.token;
    socket = io('http://localhost:8080',{
        auth : {
            token : jwtToken,
        }
    });

    socket.on('connect', ()=>{
        console.log('connected with socket.io server :', socket.id);
    })

    //our custom events
    socket.on('friends-invitations', (data)=>{
        const {pendingInvitations} = data;
        console.log('Friend invitations event came :', pendingInvitations)
        store.dispatch(setPendingFriendInvitations(pendingInvitations));
    })
    socket.on('friends-list',(data) =>{
        const {friends} = data;
        store.dispatch(setFriends(friends));
    })
    socket.on('online-users', (data) =>{
        const {onlineUsers} = data;
        store.dispatch(setOnlineUsers(onlineUsers));
    })
    socket.on('direct-chat-history', (data) =>{
        updateDirectChatHistoryIfActive(data);

    });

    socket.on('room-create', (data) =>{
        console.log('Room created came from the server:--->', data);
        roomHandler.newRoomCreated(data);
    
    })

    socket.on('active-rooms', (data) =>{
        console.log('^^^^^^^we need to call updateActiveRooms here^^^^^^^')
        roomHandler.updateActiveRooms(data);
    })

    socket.on('conn-prepare', (data) =>{
        console.log('&&&&&&&-------- preparing for connection ------&&&&&', data); 
        const { connUserSocketId} = data;
        webRTCHandler.prepareNewPeerConnection(connUserSocketId, false);        //preparing for connection should be on the passive side

        socket.emit('conn-init', {connUserSocketId : connUserSocketId})         //initialize connection to all the users who have prepared for the connection

    })

    socket.on('conn-init', (data) =>{
        const {connUserSocketId} = data;
        webRTCHandler.prepareNewPeerConnection(connUserSocketId, true);         
    })


    socket.on('conn-signal', (data) =>{
        webRTCHandler.handleSignalingData(data);

    })

    socket.on('room-participant-left', (data) =>{
        console.log('user left room');

        webRTCHandler.handleParticipantLeftRoom(data);
    })
}

export const sendDirectMessage = (data) =>{
    console.log('---->', data);
    socket.emit('direct-message', data);
}
export const getDirectChatHistory = (data) =>{
    console.log('I come here_1');
    console.log('socket---->', socket);
    if(socket && socket.connected){
        socket.emit('direct-chat-history', data);
        console.log('I came here_2');
    }
}

export const createNewRoom = () =>{
    socket.emit('room-create');
}

export const joinRoom = (data) =>{
    socket.emit('room-join', data);
}

export const leaveRoom = (data) =>{
    socket.emit('room-leave', data);
}

export const signalPeerData = (data) =>{
    socket.emit('conn-signal', data);
}

