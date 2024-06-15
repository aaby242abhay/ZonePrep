import React from 'react'
import {styled} from '@mui/material/styles'

const MainContainer = styled('div')({
    flexGrow : 1,
    marginTop : '48px',
    display : 'flex',
    backgroundColor : '#36393f',

})

export default function Messenger() {
  return (
    <MainContainer>Messenger</MainContainer>
  )
}
