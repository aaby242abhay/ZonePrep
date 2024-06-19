import React from 'react'
import {styled} from '@mui/material/styles'
import MainPageButton from './MainPageButton'
import CreateRoomButton from './CreateRoomButton'
import {connect} from 'react-redux'
import ActiveRoomButton from './ActiveRoomButton' 

const MainContainer = styled('div')({
  width : '72px',
  height : '100vh',
  display : 'flex',
  alignItems : 'center',
  flexDirection : 'column',
  backgroundColor : '#202225',
})
const SideBar = ({activeRooms, isUserInRoom}) => {
  console.log('I am printing the active room----->', activeRooms);
  console.log('I am printing the isUserInRoom----->', isUserInRoom);
  return (
    <MainContainer>
        <MainPageButton/>
        <CreateRoomButton/>
        {activeRooms.map((room) => (
          <ActiveRoomButton 
            roomId = {room.roomId}
            creatorUsername = {room.creatorUsername}
            amountOfParticipants = {room.participants.length}
            key = {room.roomId}
            isUserInRoom = {isUserInRoom}
          />
        ))}
    </MainContainer>
  )
}

const mapStoreStateToProps = ({room}) =>{
  return{
    ...room,
  }
}

export default connect(mapStoreStateToProps)(SideBar)
