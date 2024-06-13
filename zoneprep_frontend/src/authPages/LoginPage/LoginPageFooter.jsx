import React from 'react'
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton'
import RedirectInfo from '../../shared/components/RedirectInfo'
import {useNavigate} from 'react-router-dom'
import { Tooltip } from '@mui/material'

const getFormNotValidMessage = () =>{
    return 'Registraiton number must be 8 digit numeric!!!'
}
const getFormValidMessage = () =>{
    return 'Press to log in!'
}


export default function LoginPageFooter({handleLogin, isFormValid}) {

    const navigate = useNavigate()
    const handlePushToRegisterPage = () => {
        navigate('/register');
    }
  return (
    <>
        <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}>
            <div>
                <CustomPrimaryButton
                    label = 'Log in'
                    additinalStyes={{marginTop : '30px'}}
                    disabled={!isFormValid}
                    onClick={handleLogin}
            />
            </div>

        </Tooltip>
        
        <RedirectInfo
            text='Need an account?'
            redirectText='Create an account'
            additoinalStyles={{marginTop : '5px'}}
            redirectHandler={handlePushToRegisterPage}
        >
        </RedirectInfo>
    </>
  )
}
