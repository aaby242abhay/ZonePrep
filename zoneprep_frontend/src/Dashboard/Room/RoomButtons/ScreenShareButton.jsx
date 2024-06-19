import React,{useState} from 'react'
import IconButton from '@mui/material/IconButton'
import ScreenShareIcon from '@mui/icons-material/ScreenShare'
import StopScreenShareIcon from '@mui/icons-material/StopScreenShare'

export default function ScreenShareButton() {
    const [isScreenSharingActive,setIsScreenSharingActive] = useState(false)

    const handeScreenShareToggle = () =>{
        setIsScreenSharingActive(!isScreenSharingActive)
    }
  return (
    <IconButton onClick = {handeScreenShareToggle} style = {{color : 'white'}}>
        {isScreenSharingActive ? <ScreenShareIcon  /> : <StopScreenShareIcon />}
    </IconButton>
  )
}
