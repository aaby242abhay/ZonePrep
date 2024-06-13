import React from 'react'
import {styled} from '@mui/material/styles'

const Wrapper = styled('div')({
    margin : '35px 0',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
})

const Label = styled('label')({
    marginBottom : '5px',
    color : '#b9bbbe',
    textTransform : 'uppercase',
    fontSize : '16px',
    fontWeight : '600',
})

const Input = styled('input')({
    flexgrow : 1,
    height : '40px',
    border : '1px',
    borderRadius : '5px',
    color : '#dcddde',
    backgroundColor : '#35393f',
    margin : 0,
    fontSize : '16px',
    padding : '0 5px',
})

export default function InputWithLabel(props) {
    const {value, setValue, label, type, placeHolder} = props

    const handleValueChange = (e) => {
        setValue(e.target.value);
    }

  return (
    <Wrapper>
        <Label>{label}</Label>
        <Input
            value = {value}
            onChange = {handleValueChange}
            type={type}
            placeholder={placeHolder}
        />
    </Wrapper>

  )
}
