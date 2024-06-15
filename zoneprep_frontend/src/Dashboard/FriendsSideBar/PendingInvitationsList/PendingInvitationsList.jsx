import React from 'react'
import { styled } from '@mui/material'

const MainContainer = styled('div')({
    width : '100%',
    height : '22%',
    display : 'flex',
    flexDirection : 'column',
    alignItems : 'center',
    justifyContent : 'center',
    overFlow : 'auto',

})

export default function PendingInvitationsList() {
  return (
    <MainContainer></MainContainer>
  )
}
