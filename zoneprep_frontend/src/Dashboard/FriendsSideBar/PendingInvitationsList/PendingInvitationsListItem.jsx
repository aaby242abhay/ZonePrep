import React from 'react'
import { useState } from 'react';
import { Tooltip, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Avatar from '../../../shared/components/Avatar';
import InvitationDecisionButtons from './InvitationDecisionButtons';


export default function PendingInvitationsListItem({
    id,
    username, 
    registration_no,
    acceptFriendInvitation = () => {},
    rejectFriendInvitation = () => {}

}) {
    const[buttonDisabled, setButtonDisabled] = useState(false);

    const handleAcceptInvitation = () =>{
        setButtonDisabled(true);
        acceptFriendInvitation({id});
    }

    const handleRejectInvitation = () =>{
        setButtonDisabled(true);
        rejectFriendInvitation({id});
    }

  return (
    <Tooltip title={registration_no}>  
        <div style = {{width : '100%'}}>
             <Box
              sx = {{
                    width : '100%',
                    height : '42px',
                    marginTop : '10px',
                    display : 'flex',
                    alignItems : 'center',
                    justifyContent : 'space-between', 
              }}
             >
                <Avatar username={username}/>
                <Typography
                    sx = {{
                        marginLeft : '7px',
                        fontWeight : '700',
                        color : '#8e9297',
                        flexGrow : 1
                    }}
                    variant = 'subtitle1'
                >{username}</Typography>
                <InvitationDecisionButtons
                disabled = {buttonDisabled}
                acceptInvitationHandler = {handleAcceptInvitation}
                rejectInvitationHandler = {handleRejectInvitation}
                 />
             </Box>
        </div>
    </Tooltip>
  )
}
