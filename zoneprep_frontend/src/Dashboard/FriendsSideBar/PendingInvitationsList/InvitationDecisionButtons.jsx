import React from 'react'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box'
import { IconButton } from '@mui/material'

export default function InvitationDecisionButtons({
    disabled,
    acceptInvitationHandler,
    rejectInvitationHandler
}) {
  return (
    <Box sx = {{display : 'flex'}}>
        <IconButton 
            style = {{ color : 'white' }}
            disabled = {disabled}
            onClick = {acceptInvitationHandler}
        >
            <PersonAddIcon/>
        </IconButton>
        <IconButton 
            style = {{ color : 'white' }}
            disabled = {disabled}
            onClick = {rejectInvitationHandler}
        >
            <DeleteIcon/>
        </IconButton>
    </Box>
  )
}
