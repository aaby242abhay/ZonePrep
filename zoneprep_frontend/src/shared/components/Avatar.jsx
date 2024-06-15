
import React from 'react'
import {styled} from '@mui/material/styles'

const AvatarPreview = styled('div')
({
    width : '30px',
    height : '30px',
    backgroundColor : '#5865f2',
    borderRadius : '42px',
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'center',
    fontSize : '16px',
    fontWeight : '800',
    marginLeft : '10px',
    color : 'white',

})

export default function Avatar({username, large}) {
  return (
    <AvatarPreview
        style = {large? {height : '80px', width : '80px'} : {}}
    >{username.substring(0,2)}</AvatarPreview>
  )
}
