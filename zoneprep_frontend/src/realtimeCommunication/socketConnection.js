import io from 'socket.io-client';
import {setPendingFriendInvitations} from '../store/actions/friendsActions';
import store from '../store/store';

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
}