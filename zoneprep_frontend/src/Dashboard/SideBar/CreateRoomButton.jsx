import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import * as roomHandler from '../../realtimeCommunication/roomHandler'

import React from 'react'

export default function CreateRoomButton(isUserInRoom) {
    const createNewRoomHandler = () =>{
        //creating a new room and sending the info to the server about this
        roomHandler.createNewRoom();
    }
  return (
    <Button
        // disabled = {!isUserInRoom}
        onClick = {createNewRoomHandler}
        style = {{
            width : '48px',
            height : '48px',
            borderRadius : '16px',
            margin : '0px',
            padding : '0px',
            minWidth : '0px',
            marginTop : '10px',
            color : "white",
            backgroundColor : '#5865f2',    
        }}
    >
        <AddIcon/>
    </Button>
  )
}
