import React from 'react'
import {styled} from '@mui/material/styles'
import DropDownMenu from './DropDownMenu'

const MainContainer = styled('div')({
    position : 'absolute',
    right : '0',
    top : '0',
    height : '48px',
    borderBottom : '2px solid black',
    backgroundColor : '#36393f',
    width : 'calc(100% - 326px)',
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'space-between',
    padding : '0 15px',
})

export default function AppBar() {
  return (
    <MainContainer>
        <DropDownMenu/>
    </MainContainer>
  )
}
