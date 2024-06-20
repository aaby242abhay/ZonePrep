import React from 'react'
import {styled} from '@mui/material/styles'
import {connect} from 'react-redux'
import Video from './Video'

const MainContainer = styled('div')({
    height : '85%',
    width : '100%',
    display : 'flex',
    flexWrap : 'wrap',

})

const VideosContainer = ({localStream, remoteStreams}) => {
  return (
    <MainContainer>
        <Video stream = {localStream} isLocalStream/>
        {
            remoteStreams.map((remoteStream, index) =>(
                <Video stream = {remoteStream} key = {remoteStream.id}/>
            ))
        }
    </MainContainer>
  )
}

const mapStoreStateToProps = ({room}) => {
  return {
    ...room 
  }
}

export default connect(mapStoreStateToProps)(VideosContainer);