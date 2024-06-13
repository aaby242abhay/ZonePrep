import React from 'react'
import {useState, useEffect} from 'react'
import AuthBox from '../../shared/components/AuthBox'
import LoginPageHeader from './LoginPageHeader'
import LoginPageInputs from './LoginPageInputs'
import LoginPageFooter from './LoginPageFooter'
import {validateLoginForm} from '../../shared/utils/validator'

export default function LoginPage() {
  const [registration_no, setRegistration_no] = useState('')
  const [password, setPassword] = useState('')
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(()=>{
    setIsFormValid(validateLoginForm(registration_no, password))

  }, [registration_no, password, setIsFormValid])

  const handleLogin = () => {
    console.log('registration_no', registration_no)
    console.log('password', password)
    console.log('login clicked')

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
