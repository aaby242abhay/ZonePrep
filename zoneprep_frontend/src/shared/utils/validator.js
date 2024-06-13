export const  validateLoginForm = (registration_no, password) => {
    const isRegistration_noValid = validateRegistration_no(registration_no)
    const isPasswordValid = validatePassword(password)

    return isRegistration_noValid && isPasswordValid;
}

export const validateRegisterForm = (registration_no, password, mail, username) => {
    const isRegistration_noValid = validateRegistration_no(registration_no)
    const isPasswordValid = validatePassword(password)
    const isMailValid = validateMail(mail)
    const isUsernameValid = validateUsername(username)

    return isRegistration_noValid && isPasswordValid && isMailValid && isUsernameValid;
}

const validateUsername = (username) => {
    return username.length >= 4 && username.length <= 20;
}
const validateMail = (mail) => {
    return mail.endsWith('@mnnit.ac.in');
}
const validatePassword = (password) => {
    return password.length >= 8 && password.length <= 20;
}
const validateRegistration_no = (registration_no) => {
    return registration_no.length === 8 && !isNaN(registration_no)
}