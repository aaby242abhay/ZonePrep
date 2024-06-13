import React from 'react'
import InputWithLabel from '../../shared/components/InputWithLabel'

export default function LoginPageInputs({registration_no, setRegistration_no, password, setPassword}) {
  return (
    <>
        <InputWithLabel
            value = {registration_no}
            setValue = {setRegistration_no}
            label='Registration_no'
            type='text'
            placeHolder='Enter registration number'
        />
        <InputWithLabel
            value = {password}
            setValue = {setPassword}
            label='password'
            type='password'
            placeHolder='Enter password'
        />
    </>
  )
}
