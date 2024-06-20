export const roomActions = {
    OPEN_ROOM : 'ROOM.OPEN_ROOM',
    SET_ROOM_DETAILS : 'ROOM.SET_ROOM_DETAILS',
    SET_ACTIVE_ROOMS : 'ROOM.SET_ACTIVE_ROOMS',
    SET_LOCAL_STREAM : 'ROOM.SET_LOCAL_STREAM',
    SET_REMOTE_STREAM : 'ROOM.SET_REMOTE_STREAM',
    SET_AUDIO_ONLY : 'ROOM.SET_AUDIO_ONLY',
    SET_SCREEN_SHARE_STREAM : 'ROOM.SET_SCREEN_SHARE_STREAM',

}

export const getActions = (dispatch) =>{
    return{
        setAudioOnly : (audioOnly) => dispatch(setAudioOnly(audioOnly)),

    }
}

export const setOpenRoom = (isUserRoomCreator = false, isUserInRoom = false) => {
    return {
        type : roomActions.OPEN_ROOM,
        isUserRoomCreator,
        isUserInRoom 

    }
}

export const setRoomDetails = (roomDetails) =>{
    return{
        type : roomActions.SET_ROOM_DETAILS,
        roomDetails
    }
}

export const setActiveRooms = (activeRooms) =>{
    return {
        type : roomActions.SET_ACTIVE_ROOMS,
        activeRooms
    }
}

export const setLocalStream = (localStream) =>{
    return{
        type : roomActions.SET_LOCAL_STREAM,
        localStream
    }
}

export const setRemoteStreams = (remoteStreams) =>{
    return{
        type : roomActions.SET_REMOTE_STREAM,
        remoteStreams
    }
}

export const setAudioOnly  = (audioOnly) => {
    return {
        type : roomActions.SET_AUDIO_ONLY,
        audioOnly
    }
}