import React from 'react'
import Button from '@mui/material/Button'

export default function CustomPrimaryButton({label, additinalStyes, disabled, onClick}) {
  return (
    <Button
        variant = 'contained'
        sx={{
            bgcolor: '#5865F2',
            color: 'white',
            fontSize : '16px',
            fontWeight : '900',
            width : '100%',
            height : '40px',
            textTransform : 'none',
        }}
        style = {additinalStyes? additinalStyes : {}}
        disabled = {disabled}
        onClick={onClick}
    >{label}
    </Button>
  )
}
