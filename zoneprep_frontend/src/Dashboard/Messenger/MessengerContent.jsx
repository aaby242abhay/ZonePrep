import React, {useEffect} from 'react'
import {styled} from '@mui/system'
import Messages from './Messages/Messages'
import NewMessageInput from './NewMessageInput'

const Wrapper = styled('div')({
    flexGrow : 1,
})


export default function MessengerContent({chosenChatDetails}) {

    useEffect( () => {  
        //fetching chat history details with specific 
    })
  return (
    <Wrapper>
        <Messages/>
        <NewMessageInput/>
    </Wrapper>
  )
}
