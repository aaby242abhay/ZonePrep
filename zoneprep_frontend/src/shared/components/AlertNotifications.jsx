import React from 'react'
import  Alert from '@mui/material/Alert'
import { Snackbar } from '@mui/material'
import {connect }from 'react-redux' 
import { getActions } from '../../store/actions/alertActions'



const  AlertNotifications = ({
    showAlertMessage,
    alertMssageContent,
    closeAlertMessage
}) => {
  return (
    <Snackbar anchorOrigin={{ vertical : 'bottom', horizontal: 'center'}}
        open = {showAlertMessage}
        onClose={closeAlertMessage}
        autoHideDuration={6000}
        >
        <Alert severity='info'>
            {alertMssageContent}
        </Alert> 
    </Snackbar>
  )
}

const mapStateToProps = ({alert}) => {
    return {
        ...alert,
    }
}

const mapActionsToProps = (dispatch) => {
    return {
        ...getActions(dispatch),
    }
}

export default connect(mapStateToProps, mapActionsToProps)(AlertNotifications)
