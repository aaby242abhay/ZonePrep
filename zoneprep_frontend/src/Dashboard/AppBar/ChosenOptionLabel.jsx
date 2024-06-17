import React from 'react'
import {connect} from 'react-redux'
import { Typography } from '@mui/material'


const ChosenOptionLabel = ({name }) => {
  return (
    <Typography
        sx = {{
            fontsize : '16px',
            color : 'white',
            fontWeight : 'bold',
        }}
    >
        {`${name ? `Choosen Conversation : ${name}` : ""}`}
    </Typography>
  )
}

const mapStoreStateToProps = (state) => {
    return {
        name : state.chat.chosenChatDetails ? state.chat.chosenChatDetails.name : null
    }
}

export default connect(mapStoreStateToProps)(ChosenOptionLabel);

