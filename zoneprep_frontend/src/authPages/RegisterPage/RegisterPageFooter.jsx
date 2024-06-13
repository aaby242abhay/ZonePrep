import React from 'react'
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton'
import RedirectInfo from '../../shared/components/RedirectInfo'
import {useNavigate} from 'react-router-dom'
import { Tooltip } from '@mui/material'

const getFormNotValidMessage = () =>{
    return 'Please enter a valid registration_no'
}
const getFormValidMessage = () =>{
    return 'Press to register!'
}


export default function RegisterPageFooter({handleRegister, isFormValid}) {

    const navigate = useNavigate()
    const handlePushToLoginPage = () => {
        navigate('/login');
    }
  return (
    <>
        <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}>
            <div>
                <CustomPrimaryButton
                    label = 'Register'
                    additinalStyes={{marginTop : '30px'}}
                    disabled={!isFormValid}
                    onClick={handleRegister}
            />
            </div>

        </Tooltip>
        
        <RedirectInfo
            text='Already have an account?'
            redirectText='Log in here'
            additoinalStyles={{marginTop : '5px'}}
            redirectHandler={handlePushToLoginPage}
        >
        </RedirectInfo>
    </>
  )
}


