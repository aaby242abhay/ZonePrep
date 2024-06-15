import React from 'react'
import {styled} from '@mui/material/styles'
import Sidebar from './SideBar/SideBar'
import FriendsSideBar from './FriendsSideBar/FriendsSideBar'
import Messenger from './Messenger/Messenger'
import Appbar from './AppBar/AppBar'


const Wrapper = styled('div')({
  width : '100%',
  height : '100vh',
  display : 'flex',
})
export default function DashBoard() {
  return (
    <Wrapper>
      <Sidebar/>
      <FriendsSideBar/>
      <Messenger/>
      <Appbar/>
    </Wrapper>
  )
}
