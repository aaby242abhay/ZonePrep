import React from 'react'
import { styled } from '@mui/material'
import FriendsListItem from './FriendsListItem'

const DUMMY_FRIENDS = [
    {
        id : 1,
        username : 'John Doe',
        isOnline : true,
    },{
        id : 2,
        username : 'Aaby Abhay',
        isOnline : false
    },{
        id : 3,
        username : 'random user',
        isOnline : true,
    }
]

const MainContainer = styled('div')({
    flexGrow : 1,
    width : '100%'
})

export default function FriendsList() {
  return (
    <MainContainer>
        {DUMMY_FRIENDS.map(f => (
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
