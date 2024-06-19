import React from 'react'
import {styled} from '@mui/material/styles'
import ScreenShareButton from './ScreenShareButton'
import MicButton from './MicButton'
import CloseRoomButton from './CloseRoomButton'
import CameraButton from './CameraButton'

const MainContainer = styled('div')({
    height : '15%',
    width : '100%',
    backgroundColor : '#5865f2',
    borderTopLeftRadius : '8px',
    borderTopRightRadius : '8px',
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'center',
})

export default function RoomButtons() {
  return (
    <MainContainer>
        <ScreenShareButton/>
        <MicButton/>
        <CloseRoomButton/>
        <CameraButton/>
    </MainContainer>
  )
}
