import React from 'react'
import {useEffect} from 'react'
import {styled} from '@mui/material/styles'
import Sidebar from './SideBar/SideBar'
import FriendsSideBar from './FriendsSideBar/FriendsSideBar'
import Messenger from './Messenger/Messenger'
import Appbar from './AppBar/AppBar'
import {logout} from '../shared/utils/auth'
import {connect} from 'react-redux'
import {getActions} from '../store/actions/authActions'
import { connectWithSocketServer } from '../realtimeCommunication/socketConnection'


const Wrapper = styled('div')({
  width : '100%',
  height : '100vh',
  display : 'flex',
})
const   DashBoard = ({setUserDetails}) => {
  useEffect(()=>{
    const userDetails = localStorage.getItem('userDetails')
    if(!userDetails){
      logout();
    }else{
      setUserDetails(JSON.parse(userDetails))
      connectWithSocketServer(JSON.parse(userDetails));
    }
    

  }, [setUserDetails])
  return (
    <Wrapper>
      <Sidebar/>
      <FriendsSideBar/>
      <Messenger/>
      <Appbar/>
    </Wrapper>
  )
}
const mapActionsToProps = (dispatch) => {
  return{
    ...getActions(dispatch)
  }
}

export default connect(null, mapActionsToProps)(DashBoard)