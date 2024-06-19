import { setOpenRoom, setRoomDetails, setActiveRooms} from '../store/actions/roomActions'
import store from '../store/store'
import * as socketConnection from './socketConnection'

export const createNewRoom = () => {
    store.dispatch(setOpenRoom(true, true));
    socketConnection.createNewRoom();
}

export const newRoomCreated = (data) => {
    const { roomDetails} = data;
    store.dispatch(setRoomDetails(roomDetails));
}

export const updateActiveRooms = (data) => {
    const {activeRooms} = data
    // console.log('^^^^^^^Active rooms came from the server:--->', activeRooms);

    const friends = store.getState().friends.friends;
    // console.log('*****are friends coming*****', friends);
    const rooms = [];
    activeRooms.forEach( room =>{
        friends.forEach( f =>{
            if (f.id === room.roomCreator.userId){
                rooms.push({...room, creatorUsername : f.username})
            }
        })
    });
    console.log('****now I am trying to match friends with rooms***', rooms);

    store.dispatch(setActiveRooms(rooms));
}

export const joinRoom = (roomId) => {
    store.dispatch(setRoomDetails({roomId}));
    store.dispatch(setOpenRoom(false, true));
    socketConnection.joinRoom({roomId});
}
