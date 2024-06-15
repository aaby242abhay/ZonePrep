import {openAlertMessage} from './alertActions'
import * as api from '../../api'

export const friendsActions = {
    SET_FRIENDS : 'FRIENDS.SET_FRIENDS',
    SET_PENDING_FRIEND_INVITATIONS : 'FRIENDS.SET_PENDING_FRIEND_INVITATIONS',
    SET_ONLINE_USERS : 'FRIENDS.SET_ONLINE_USERS',
}

export const getActions = (dispatch) =>{
    return{
        sendFriendInvitation : (data, closeDialogHandler) => dispatch(sendFriendInvitation(data, closeDialogHandler)),

    }
}

const sendFriendInvitation = (data, closeDialogHandler) => {
    return async (dispatch) => {
        const response = await api.sendFriendInvitation(data);
        if(response.error){
            dispatch(openAlertMessage(response.exception?.response?.data));
        }else{
            dispatch(openAlertMessage('Invitation Sent Successfully'));
            closeDialogHandler();
        }
    }  
}