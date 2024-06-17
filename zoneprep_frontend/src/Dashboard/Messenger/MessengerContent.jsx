import React, {useEffect} from 'react'
import {styled} from '@mui/system'
import Messages from './Messages/Messages'
import NewMessageInput from './NewMessageInput'
import {getDirectChatHistory} from '../../realtimeCommunication/socketConnection'

const Wrapper = styled('div')({
    flexGrow : 1,
})


export default function MessengerContent({chosenChatDetails}) {

    useEffect( () => {  
        //fetching chat history details with specific 
        getDirectChatHistory({
          recieverUserId : chosenChatDetails.id
        })
    },[chosenChatDetails])
  return (
    <Wrapper>
        <Messages/>
        <NewMessageInput/>
    </Wrapper>
  )
}
