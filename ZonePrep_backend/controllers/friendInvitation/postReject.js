const FriendInvitation = require('../../models/friendInvitation');
const friendsUpdates = require('../../socketHandlers/updates/friends');

const postReject = async (req, res) => {
    try{
        const {id} = req.body;
        const {userId} = req.user;

        //removing friend from the user's friend list
        const invitationExists = await FriendInvitation.exists({_id : id})
        if(invitationExists){
            await FriendInvitation.findByIdAndDelete(id);
        }

        friendsUpdates.updateFriendsPendingInvitations(userId);
        return res.status(200).send('Invitation rejected successfully');

    }catch(err){
        console.log(err);
        return res.status(500).send('Something went wrong. Please try again.');
    }

}

module.exports = postReject;