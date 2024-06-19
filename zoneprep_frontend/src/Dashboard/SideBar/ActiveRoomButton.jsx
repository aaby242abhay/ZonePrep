import { Button } from '@mui/material'
import Tooltip from '@mui/material/Tooltip'
import React from 'react'
import Avatar from '../../shared/components/Avatar'
import * as roomHandler from '../../realtimeCommunication/roomHandler'

export default function ActiveRoomButton({
    creatorUsername,
    roomId,
    isUserInRoom,
    amountOfParticipants
}) {

    const handleJoinActiveRoom = () => {
        if(amountOfParticipants < 4){
            //join room
            roomHandler.joinRoom(roomId)
        }
    }
    const activeRoomButtonDisbaled = amountOfParticipants > 3 
    const roomTitle = `Creator : ${creatorUsername}. Connected : ${amountOfParticipants}` 
    console.log(creatorUsername);

  return (
    <Tooltip title = {roomTitle}>
        <div>
            <Button
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
                disabled = {activeRoomButtonDisbaled || isUserInRoom}
                onClick = {handleJoinActiveRoom}    
            >
                <Avatar username = {creatorUsername}/>
            </Button>


        </div>
    </Tooltip>
  )
}
