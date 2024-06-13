import { Input } from '@mui/material'
import React from 'react'
import InputWithLabel from '../../shared/components/InputWithLabel'

export default function RegisterPageInputs(props) {
    const {mail, setMail, username, setUsername, password, setPassword, registration_no, setRegistration_no} = props
  return (
    <>
        <InputWithLabel
        value = {username}
        setValue = {setUsername}
        label = 'Enter Username'
        type = 'text'
        placeHolder = 'Enter the username (try something unique)😉'
        />
        <InputWithLabel
        value = {mail}
        setValue = {setMail}
        label = 'Enter e-mail address'
        type = 'text'
        placeHolder = 'Must enter the college email address ending in @mnnit.ac.in'
        />
        <InputWithLabel
        value = {registration_no}
        setValue = {setRegistration_no}
        label = 'Enter Registration Number'
        type = 'text'
        placeHolder = 'Must enter the college registration_no'
        />
        <InputWithLabel
        value = {password}
        setValue = {setPassword}
        label = 'Enter Password'
        type = 'password'
        placeHolder = 'Password must be atleast 8 characters long'
        />
    </>
  )
}
