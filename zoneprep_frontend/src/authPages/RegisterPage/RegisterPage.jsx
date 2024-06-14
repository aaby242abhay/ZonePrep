import React, {useState, useEffect} from 'react'
import AuthBox from '../../shared/components/AuthBox'
import { Typography } from '@mui/material'
import RegisterPageInputs from './RegisterPageInputs'
import RegisterPageFooter from './RegisterPageFooter'
import {validateRegisterForm} from '../../shared/utils/validator'
import {connect} from 'react-redux'
import {getActions} from '../../store/actions/authActions'
import {useNavigate} from 'react-router-dom'

const  RegisterPage = ({register}) => {
  const history = useNavigate()
  const [registration_no, setRegistration_no] = useState('')
  const [password, setPassword] = useState('')
  const [mail, setMail] = useState('')
  const [username, setUsername] = useState('')

  const [isFormValid, setIsFormValid] = useState(false);

  const handleRegister = ()=>{
    const userDetails = {
      registration_no,
      password,
      mail,
      username
    }
    register(userDetails, history)
   
  }

  useEffect(()=>{
    setIsFormValid(validateRegisterForm(registration_no, password, mail, username))
  },[mail, username, registration_no, password, setIsFormValid])

  return (
    <AuthBox>
      <Typography variant = 'h5' sx = {{color : 'white'}}>
        Create an account
      </Typography>
      <RegisterPageInputs
        mail={mail}
        setMail={setMail}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        registration_no={registration_no}
        setRegistration_no={setRegistration_no}
      />
      <RegisterPageFooter
        handleRegister = {handleRegister}
        isFormValid={isFormValid}
      />

    </AuthBox>
  )
}

const mapActionsToProps = (dispatch) => {
  return{
    ...getActions(dispatch)
  }
}

export default connect(null, mapActionsToProps)(RegisterPage);       //this makes sure that the actions are available in the props of the componenet
