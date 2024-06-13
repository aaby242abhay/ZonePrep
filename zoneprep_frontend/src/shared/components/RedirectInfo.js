import React from 'react'
import { Typography } from '@mui/material'
import styled from '@emotion/styled'


const RedirectText = styled('span')({
    color : '#00AFF4',
    fontWeight : '500',
    cursor : 'pointer',
})

export default function RedirectInfo({text, redirectText, additoinalStyles, redirectHandler}) {
  return (
    <Typography
        sx ={{color : '#72767d'}}
        style={additoinalStyles? additoinalStyles : {}}
        variant = 'subtitle2'
    >
        {text}
        <RedirectText onClick={redirectHandler}>{redirectText}</RedirectText>
    </Typography>
  )
}
