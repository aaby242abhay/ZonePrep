import store from '../../store/store';
import {setMessages} from '../../store/actions/chatActions';

export const updateDirectChatHistoryIfActive = (data) =>{
    const { participants, messages} = data;

    //now finding id of user from token and id from active conversation
    const recieverId = store.getState().chat.chosenChatDetails?.id;
    const userId = store.getState().auth.user._id;

    if(userId && recieverId){
        const usersInConversation = [recieverId, userId];

        updateChatHistoryIfSameConversationActive({
            participants,
            usersInConversation,
            messages
        })
    }
}

const updateChatHistoryIfSameConversationActive = ({participants, usersInConversation, messages}) =>{
    const result = participants.every(function(participantId){          //result will be true if the return statement is true for all the elements
        return usersInConversation.includes(participantId);             //usersInConversation = [me, someUser]    //chatUpdatefromServer.participants = [me, sameOrAnotherUser]
    })
    if(result){
        store.dispatch(setMessages(messages));
    }
}
