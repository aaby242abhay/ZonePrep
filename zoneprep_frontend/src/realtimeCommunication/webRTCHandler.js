import store from '../store/store';
import {setLocalStream, setRemoteStreams} from '../store/actions/roomActions';
import Peer from 'simple-peer';
import * as socketConnection from './socketConnection';


const getConfiguration = () =>{
    const turnIceServers = null;
    
    if(turnIceServers){
        //use turnServer credentials to fetch the iceCandidates
    }else{
        console.log('USING ONLY STUN SERVERS');
        return {
            iceServers : [
                {
                    urls : 'stun:stun.l.google.com:19302',
                }
            ]
        }
    }
}

const onlyAudioConstraints = {
    audio : true,
    video : false
}

const defaultConstraints = {
    audio : true,
    video : true
}

export const getLocalStreamPreview = (onlyAudio , callbackFunc) => {
    const constraints = onlyAudio ? onlyAudioConstraints : defaultConstraints;
    console.log('These are the constraints from the webRTC handler-----> ',constraints);

    navigator.mediaDevices.getUserMedia(constraints).then((stream) =>{
        store.dispatch(setLocalStream(stream));
        callbackFunc();
    }).catch( (err)=>{
        console.log(err);
        console.log('Cannot get access to localStream');
    })
}

let peers = {};

export const prepareNewPeerConnection = (connUserSocketId, isInitiator) =>{
    const localStream = store.getState().room.localStream;
    if(isInitiator){
        console.log('*******Preparing for connection as initiator*******');
    }else{
        console.log('*******Preparing for connection as passive side*******');
    }

    peers[connUserSocketId] = new Peer({
        initiator : isInitiator,
        config : getConfiguration(),
        stream : localStream
    });

    peers[connUserSocketId].on('signal', (data) =>{
        const signalData = {
            signal : data,
            connUserSocketId : connUserSocketId,
        }
        
        socketConnection.signalPeerData(signalData);
        //pass the signaling data to the other user to whom we want to connect
        // socketConneection.signalPeerData(signalData);


    })
    peers[connUserSocketId].on('stream', (remoteStream) =>{

        //add new remote streeam to our server store
        console.log('Remote stream came from the other user');
        console.log('Direct connection has been established');

        remoteStream.connUserSocketId = connUserSocketId;
        addNewRemoteStream(remoteStream);
    })
}

export const handleSignalingData = (data) =>{
    const {signal, connUserSocketId} = data;

    if(peers[connUserSocketId]){
        peers[connUserSocketId].signal(signal);
    }
}

const addNewRemoteStream = (remoteStream) =>{
    const remoteStreams = store.getState().room.remoteStreams;
    const newRemoteStreams = [...remoteStreams, remoteStream];

    store.dispatch(setRemoteStreams(newRemoteStreams));
}

export const closeAllConnections = () =>{
    console.log('********we are in close all connections of webRTC handler******** 1');
    console.log('peers--->', peers);
    Object.entries(peers).forEach((mappedObject) =>{         //creating a map of the peer object returning an array wherre the key would be connUserSocketId
        const connUserSocketId = mappedObject[0];
        if(peers[connUserSocketId]){
            peers[connUserSocketId].destroy();               //destroying the webRTC connection
            delete peers[connUserSocketId];                 //deleting the peer from the map
        }
    })   
     
    console.log('****************The user who closed the room has removed all his webRTC connections from his clientSide***2')              
}

export const handleParticipantLeftRoom = (data) =>{

    console.log('****in handleParticipantLeftRoom**');
    const {connUserSocketId} = data;
    if(peers[connUserSocketId]){                        //deleting the peer from the map    
        // try{
        //     peers[connUserSocketId].destroy();              //destroying the webRTC connection
        //     delete peers[connUserSocketId];                 //this is done on the client side for all the users who are still connected in
        // }catch(err){
        //     console.log("Error in webRTC handler------->");
        //     console.log(err);
        // }
    }

    const remoteStreams = store.getState().room.remoteStreams;
    const newRemoteStreams = remoteStreams.filter(
        (remoteStream) => remoteStream.connUserSocketId !== connUserSocketId
    );

    store.dispatch(setRemoteStreams(newRemoteStreams));
}