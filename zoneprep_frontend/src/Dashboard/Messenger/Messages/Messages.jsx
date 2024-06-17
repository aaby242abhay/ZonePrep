import React from 'react'
import {useRef, useEffect} from 'react'
import {styled} from '@mui/material/styles'
import MessagesHeader from './MessagesHeader'
import {connect } from 'react-redux'
import Message from './Message'
import DUMMY_MESSAGES from './DUMMY_MESSAGES'

const MainContainer = styled('div')({
    height : 'calc(100% - 60px)',
    overflow : 'auto',                                  //for many messages
    display : 'flex',
    flexDirection : 'column',
    alignItems : 'center',
})

const Messages = ({chosenChatDetails, messages}) => {
  return (
    <MainContainer>
        <MessagesHeader name = {chosenChatDetails?.name}/>
        {DUMMY_MESSAGES.map((message, index) => {
            return (
                <Message 
                    key = {messages._id}
                    content = {message.content}
                    username = {message.author.username}
                    sameAuthor = {message.sameAuthor}
                    date = {message.date}
                    sameDay = {message.sameDay} 
                />
            )
        })}
    </MainContainer>
  )
}

const mapStoreStateToProps = ({chat}) => {
    return {
        ...chat,
    }
}

export default connect(mapStoreStateToProps)(Messages);
