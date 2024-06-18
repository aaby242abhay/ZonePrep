import React from 'react'
import {styled} from '@mui/material/styles'

const Separator = styled('div')({
    width : '95%',
    backgroundColor : '#b9bbbe',
    height : '1px',
    position : 'relative',
    marginTop : '10px',
    marginBottom : '10px',
})

const DateLabel = styled('div')({
    backgroundColor : '#36393f',
    color : '#b9bbbe',
    padding : '0 5px',
    position : 'absolute',
    top : '-10px',
    left : '45%',
    fontSize : '12px',
    borderRadius : '5px',

})

export default function DateSeparator({date}) {
  return (
    <Separator>
        <DateLabel>{date}</DateLabel>
    </Separator>
  )
}
