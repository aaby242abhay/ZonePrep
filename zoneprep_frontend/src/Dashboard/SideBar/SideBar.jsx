import React from 'react'
import {styled} from '@mui/material/styles'
import MainPageButton from './MainPageButton'


const MainContainer = styled('div')({
  width : '72px',
  height : '100vh',
  display : 'flex',
  alignItems : 'center',
  flexDirection : 'column',
  backgroundColor : '#202225',
})
export default function SideBar() {
  return (
    <MainContainer>
        <MainPageButton/>
    </MainContainer>
  )
}
