import React from 'react'
import { useState, useEffect } from 'react'
import {validateRegistration_no} from '../../shared/utils/validator'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import InputWithLabel from '../../shared/components/InputWithLabel'
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';
import DialogActions from '@mui/material/DialogActions';
import {connect} from 'react-redux'
import {getActions} from '../../store/actions/friendsActions'


const AddFriendDialouge = ({
    isDialogOpen,
    closeDialogHandler,
    sendFriendInvitation = () => {}
    
}) => {

    const [registration_no, setRegistration_no] = useState('');
    const [isFormValid, setIsFormValid] = useState('');
    const handleSendInvitation = () => {

        sendFriendInvitation({
            targetRegistration_no : registration_no
        }, closeDialogHandler);
    }
    const handleCloseDialog = () =>{
        closeDialogHandler();
        setRegistration_no('');
    }

    useEffect(()=>{
        setIsFormValid(validateRegistration_no(registration_no));

    },[registration_no, setIsFormValid])
  return (
    <>
        <Dialog open = {isDialogOpen} onClose={handleCloseDialog}>  
            <DialogTitle>
                <Typography>Invite Friend</Typography>
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <Typography>Enter the registration number of your friend you would like to invite...</Typography>
                    <InputWithLabel
                        label = 'Registration Number'
                        type = 'text'
                        value = {registration_no}
                        setValue = {setRegistration_no}
                        placeholder = 'Enter Registration Number'
                    ></InputWithLabel>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <CustomPrimaryButton
                    label = 'Send'
                    additinalStyes = {{
                        marginRight : '15px',
                        marginLeft : '15px',
                        marginBottom : '15px',
                    }}
                    onClick = {handleSendInvitation}
                    disabled = {!isFormValid}
                />
            </DialogActions>
        </Dialog>

    </>
  )
}

const mapActionsToProps = (dispatch) => {
    return {
        ...getActions(dispatch),
    }
}

export default connect(null, mapActionsToProps)(AddFriendDialouge)
