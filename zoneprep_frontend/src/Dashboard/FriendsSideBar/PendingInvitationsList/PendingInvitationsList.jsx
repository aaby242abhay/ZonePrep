import React from 'react'
import { styled } from '@mui/material'
import PendingInvitationsListItem from './PendingInvitationsListItem'
import {connect} from 'react-redux'

const MainContainer = styled('div')({
    width : '100%',
    height : '22%',
    display : 'flex',
    flexDirection : 'column',
    alignItems : 'center',
    justifyContent : 'center',
    overFlow : 'auto',

})

const PendingInvitationsList = ({pendingFriendInvitations}) => {
    console.log(pendingFriendInvitations);
  return (
    <MainContainer>
        {pendingFriendInvitations.map(i => (
            <PendingInvitationsListItem
                key={i._id}
                id={i._id}
                senderId={i.senderId}
                username={i.senderId.username}
                registration_no={i.senderId.registration_no}
            />
        ))}
    </MainContainer>
  )
}

const mapStoreStateToProps = ({ friends }) =>{
    return{
        ...friends,
    }
}

export default connect(mapStoreStateToProps)(PendingInvitationsList);