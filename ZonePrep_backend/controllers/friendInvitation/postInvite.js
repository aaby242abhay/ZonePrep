const User = require('../../models/users');

const postInvite = async (req,res) =>{
    const {targetRegistration_no} = req.body;
    const {userId, registration_no} = req.user;

    //checking if we are not sending the friend request to ourselves

    if(targetRegistration_no === registration_no){
        return res.status(409).send('Wanna become your own friend? Not possible buddy...')
    }
    const targetUser = await User.findOne({registration_no : targetRegistration_no});
    if(!targetUser){
        return res.status(404).send(`Person with registration number '${targetRegistration_no}' not found. Invite him maybe...`)
    }




    return res.send('Controller for postInvite works!')
}

module.exports = postInvite;