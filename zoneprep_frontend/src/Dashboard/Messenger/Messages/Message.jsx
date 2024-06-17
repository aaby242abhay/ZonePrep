import React from 'react'
import { styled } from '@mui/material/styles'
import Avatar from '../../../shared/components/Avatar'
import { Typography } from '@mui/material'

const MainContainer = styled('div')({
    width : '97%',
    display : 'flex',
    marginTop : '10px',
})

const AvatarContainer = styled('div')({
    width : '70px',
})

const MessageContainer = styled('div')({
    display : 'flex',
    flexDirection : 'column', 
})

const MessageContent = styled('div')({
    color : 'white',
    fontSize : '15px',
})

const SameAuthorMessageContent = styled('div')({
    color : '#DCDDDE',
    width : '97%',

})

const SameAuthorMessageText = styled('span')({
    marginLeft : '70px',
    fontSize : '15px',
})

export default function Message({
    content,
    sameAuthor,
    username,
    date,
    sameDay
}) {
    if(sameAuthor && sameDay){
        return(
            <SameAuthorMessageContent>
                <SameAuthorMessageText>{content}</SameAuthorMessageText>
            </SameAuthorMessageContent>
        )
    }
  return (
    <MainContainer>
        <AvatarContainer>
            <Avatar username = {username}/>
        </AvatarContainer>
        <MessageContainer>
            <Typography
                style = {{
                    color : '#E5E4E2',
                    fontSize : '16px',
                    fontWeight : 'bold',
                }}
            >
                {username}{'  '}
                <span style= {{fontSize : '10px', color : '#72767d'}}>{date}</span>
            </Typography>
            <MessageContent>{content}</MessageContent>
        </MessageContainer>
        
    </MainContainer>
  )
}
