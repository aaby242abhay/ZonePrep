import store from '../store/store';
import {setLocalStream} from '../store/actions/roomActions';


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