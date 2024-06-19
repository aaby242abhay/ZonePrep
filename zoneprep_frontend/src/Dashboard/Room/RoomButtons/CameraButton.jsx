import React,{useState} from 'react'
import IconButton from '@mui/material/IconButton'
import VideoCamIcon from '@mui/icons-material/Videocam'
import VideoCamOffIcon from '@mui/icons-material/VideocamOff'

export default function CameraButton() {
    const [cameraEnabled,setCameraEnabled] = useState(true)

    const handleToggleCamera = () =>{
        setCameraEnabled(!cameraEnabled)
    }
  return (
    <IconButton onClick = {handleToggleCamera} style = {{color : 'white'}}>
        {cameraEnabled ? <VideoCamIcon  /> : <VideoCamOffIcon />}
    </IconButton>
  )
}
