import React from 'react'
import {styled} from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen'
import OpenInFullIcon from '@mui/icons-material/OpenInFull'

const MainContainer = styled('div')({
    position : 'absolute',
    bottom : '10px',
    right : '10px',
})

export default function ResizeRoomButton({
    isRoomMinimized,
    handleRoomResize
}) {
  return (
    <MainContainer>
        <IconButton style = {{color : 'white'}} onClick = {handleRoomResize}>
            {isRoomMinimized ? <OpenInFullIcon /> : <CloseFullscreenIcon />}
        </IconButton>
    </MainContainer>
  )
}
