import React,{useState} from 'react'
import IconButton from '@mui/material/IconButton'
import ScreenShareIcon from '@mui/icons-material/ScreenShare'
import StopScreenShareIcon from '@mui/icons-material/StopScreenShare'
import * as webRTCHandler from '../../../realtimeCommunication/webRTCHandler'

const constraints = {
  audio : false,
  video : true
}

export default function ScreenShareButton({
  localStream,
  screenSharingStream,
  setScreenSharingStream,
  isScreenSharingActive
}) {

  //The RTCRtpSender.replaceTrack() replaces the track being sent with a new track.
    const handleScreenShareToggle = async () =>{
      if(!isScreenSharingActive){
        let stream = null;
        try{  
          stream = await navigator.mediaDevices.getDisplayMedia(constraints)
        }catch(err){
          console.log("Error occured while trying to get the screen share stream",err)
        }

        if(stream){
          setScreenSharingStream(stream);
          //webRTCHandler --> switch outgoing video track
          webRTCHandler.switchOutgoingTracks(stream);

        }
      }else{
          //webRTCHandler --> switch back to camera stream
          webRTCHandler.switchOutgoingTracks(localStream);
          screenSharingStream.getTracks().forEach(t => t.stop());
          setScreenSharingStream(null);
      }
    }
  return (
    <IconButton onClick = {handleScreenShareToggle} style = {{color : 'white'}}>
        {isScreenSharingActive ? <StopScreenShareIcon  /> : <ScreenShareIcon />}
    </IconButton>
  )
}
