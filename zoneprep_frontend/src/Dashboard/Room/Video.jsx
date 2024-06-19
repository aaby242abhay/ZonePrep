import React, {useEffect, useRef} from 'react'
import {styled} from '@mui/material/styles'

const MainContainer = styled('div')({
    height : '50%',
    width : '50%',
    backgroundColor : 'black',
    borderRadius : '8px',

})

const VideoElement = styled('video')({
    width : '100%',
    height : '100%',

})

export default function Video({stream, isLocalStream}) {
    
    const videoRef = useRef();

    useEffect(()=>{
        const video = videoRef.current;
        video.srcObject = stream
        video.onloadedmetadata = () => {
            video.play()
        }
    },[stream])

  return (
    <MainContainer>
        <VideoElement ref = {videoRef} autoPlay muted = {isLocalStream? true : false} />
    </MainContainer>
  )
}



//isLocalStream ----> we do not want to hear ourselves
