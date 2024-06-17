import React from 'react'
import { styled } from '@mui/material'
import FriendsListItem from './FriendsListItem'
import {connect} from 'react-redux'



const MainContainer = styled('div')({
    flexGrow : 1,
    width : '100%'
})

const checkOnlineUsers = (friends = [], onlineUsers = []) => {
    friends.forEach( f => {
        const isUserOnline = onlineUsers.find(ou => ou.userId === f.id);
        f.isOnline = isUserOnline ? true : false;
    })
    return friends;
}

const FriendsList = ({
    friends,
    onlineUsers
}) => {
    console.log('friends------>', friends)
    console.log('onlineUsers------>', onlineUsers)
  return (
    <MainContainer>
        {checkOnlineUsers(friends, onlineUsers).map(f => (
            <FriendsListItem 
                key={f.id}
                id = {f.id}
                username = {f.username}
                isOnline = {f.isOnline}
            />
        ))}
    </MainContainer>
  )
}

const mapStoreStateToProps = ({friends}) => {
    return{
        ...friends
    }
}

export default connect(mapStoreStateToProps)(FriendsList)
