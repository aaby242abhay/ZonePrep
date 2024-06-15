import React from 'react'
import {styled} from '@mui/material/styles'
import AddFriendButton from './AddFriendButton'
import FriendsTitle from './FriendsTitle'
import FriendsList from './FriendsList/FriendsList'
import PendingInvitationsList from './PendingInvitationsList/PendingInvitationsList'


const MainContainer = styled('div')({
    width : '224px',
    height : '100vh',
    display : 'flex',
    flexDirection : 'column',
    alignItems : 'center',
    backgroundColor : '#2F3136',


})
export default function FriendsSideBar() {
  return (
    <MainContainer>
        <AddFriendButton/>
        <FriendsTitle title="Private Messages"/>
        <FriendsList/>
        <FriendsTitle title="Invitations"/>
        <PendingInvitationsList />
    </MainContainer>
  )
}
