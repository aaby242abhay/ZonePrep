import React from 'react'
import {useState, useEffect} from 'react'
import AuthBox from '../../shared/components/AuthBox'
import LoginPageHeader from './LoginPageHeader'
import LoginPageInputs from './LoginPageInputs'
import LoginPageFooter from './LoginPageFooter'
import {validateLoginForm} from '../../shared/utils/validator'
import {connect} from 'react-redux'
import {getActions} from '../../store/actions/authActions'
import { useNavigate } from 'react-router-dom'

const LoginPage = ({login}) => {
  const history = useNavigate()
  const [registration_no, setRegistration_no] = useState('')
  const [password, setPassword] = useState('')
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(()=>{
    setIsFormValid(validateLoginForm(registration_no, password))

  }, [registration_no, password, setIsFormValid])

  const handleLogin = () => {
    const userDetails = {
      registration_no,
      password
    }
    login(userDetails, history)

  }

  return (
    <AuthBox>
      <LoginPageHeader />
      <LoginPageInputs 
        registration_no={registration_no}
        setRegistration_no={setRegistration_no}
        password={password}
        setPassword={setPassword}
      />
      <LoginPageFooter isFormValid={isFormValid} handleLogin={handleLogin}/>
    </AuthBox>
  )
}

const mapActionsToProps = (dispatch) => {
  return{
    ...getActions(dispatch)
  }
}

export default connect(null, mapActionsToProps)(LoginPage);       //this makes sure that the actions are available in the props of the componenet


