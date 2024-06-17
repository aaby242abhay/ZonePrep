import React from 'react'
import {styled} from '@mui/material/styles'
import Avatar from '../../../shared/components/Avatar'
import {Typography} from '@mui/material'

const MainContainer = styled('div')({
    width : '98%',
    display : 'column',
    marginTop : '10px',
})

export default function MessagesHeader({ name = " "}) {
  return (
    <MainContainer>
        <Avatar large username = {name}/>
        <Typography
            variant ='h4'
            sx = {{
                fontWeight: 'bold',
                color : 'white',
                marginLeft : '5px',
                marginRight : '5px',
            }}
        >
            {name}
        </Typography>
        <Typography sx = {{
            color : '#b9bbbe',
            marginLeft : '5px',
            marginRight : '5px',
        }}>
            This is the begining of the conversation with {name}.
        </Typography>

    </MainContainer>
  )
}
