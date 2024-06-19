import React,{useState} from 'react'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

export default function CloseRoomButton() {

    const handleLeaveRoom = () =>{

    }
  return (
    <IconButton onClick = {handleLeaveRoom} style = {{color : 'white'}}>
        <CloseIcon  />
    </IconButton>
  )
}
