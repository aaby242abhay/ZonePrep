const User = require('../../models/users');
const FriendInvitation = require('../../models/friendInvitation');
const friendsUpdates = require('../../socketHandlers/updates/friends');

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


    //checking if the invitation has been already sent
    const invitationAlreadyRecieved = await FriendInvitation.findOne({
        senderId : userId,
        recieverId : targetUser._id,
    })
    if(invitationAlreadyRecieved){
        return res.status(409).send(`Invitation has been already sent!`)
    }

    //checking if the user we are trying to invite is already our friend or not

    const usersAlreadyFriends = targetUser.friends.find(friend_id => friend_id.toString() === userId.toString());
    if(usersAlreadyFriends){
        return res.status(409).send(`Friend Already Exists!`)
    }

    //all other scenarios are not working so we can send the invitation now
    const newInvitation = await FriendInvitation.create({
        senderId : userId,
        recieverId : targetUser._id,
    })

    //if invitation has been successfully sent
    //we would like to update friends invitaions if other user is online
    //sending pending invitations to specific user

    friendsUpdates.updateFriendsPendingInvitations(targetUser._id.toString());

    return res.status(200).send(`Invitation has been sent successfully!`)
}

module.exports = postInvite;