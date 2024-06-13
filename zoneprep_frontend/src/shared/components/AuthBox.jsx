import React from 'react'
import Box from '@mui/material/Box'
import {styled } from '@mui/material/styles'

const BoxWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100vh',
  backgroundColor: '#5a228b'
})

export default function AuthBox(props) {
  return (
    <BoxWrapper>
      <Box
        sx={{ 
            width: 700,
            height : 550,
            bgcolor : '#2C3335',
            borderRadius : '5px',
            boxShadow : '0 2px 10px 0 rgba(0,0,0,1)',
            flexDirection: 'column',
            padding : '25px',
        }}>
      {props.children}
      </Box>
    </BoxWrapper>
  )
}
