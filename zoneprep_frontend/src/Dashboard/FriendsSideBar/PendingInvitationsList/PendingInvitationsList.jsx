import React from 'react'
import { styled } from '@mui/material'
import PendingInvitationsListItem from './PendingInvitationsListItem'


const dummy_invitaitions = [
    {    _id : 1,
        senderId : {
            username : 'John Doe',
            registration_no : '202142220'
        }   
    },{    _id : 2,
        senderId : {
            username : 'Aaby Abhay',
            registration_no : '202142222'
        }   
    },{    _id : 3,
        senderId : {
            username : 'Randi user',
            registration_no : '202142269'
        }   
    }
]
const MainContainer = styled('div')({
    width : '100%',
    height : '22%',
    display : 'flex',
    flexDirection : 'column',
    alignItems : 'center',
    justifyContent : 'center',
    overFlow : 'auto',

})

export default function PendingInvitationsList() {
  return (
    <MainContainer>
        {dummy_invitaitions.map(i => (
            <PendingInvitationsListItem
                key={i._id}
                senderId={i.senderId}
                username={i.senderId.username}
                registration_no={i.senderId.registration_no}
            />
        ))}
    </MainContainer>
  )
}
