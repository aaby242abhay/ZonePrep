import io from 'socket.io-client';
import {setPendingFriendInvitations, setFriends, setOnlineUsers} from '../store/actions/friendsActions';
import store from '../store/store';
import {updateDirectChatHistoryIfActive} from '../shared/utils/chat';

let socket = null;
export const connectWithSocketServer = (userDetails) =>{
    const jwtToken = userDetails.token;
    socket = io('http://localhost:5002',{
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