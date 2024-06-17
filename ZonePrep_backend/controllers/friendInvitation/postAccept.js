const FriendInvitation = require('../../models/friendInvitation');
const User = require('../../models/users');
const friendsUpdates = require('../../socketHandlers/updates/friends');

const postAccept = async (req, res) => {
    try{
        const {id} = req.body;

        const invitation = await FriendInvitation.findById(id);
        if(!invitation){
            return res.status(401).send('Error found, please try again');
        }
        const {senderId, recieverId} = invitation;


        

        // adding both of them to each other's friend list
        const senderUser = await User.findById(senderId);
        senderUser.friends = [...senderUser.friends, recieverId];

        const recieverUser = await User.findById(recieverId);
        recieverUser.friends = [...recieverUser.friends, senderId];

        await senderUser.save();
        await recieverUser.save();

        // deleting the invitation after the corresponding people are added
        await FriendInvitation.findByIdAndDelete(id);

        //update the list of the friends if the users are online
        friendsUpdates.updateFriends(senderId.toString());
        friendsUpdates.updateFriends(recieverId.toString());


        //update list of friends pending invitations
        friendsUpdates.updateFriendsPendingInvitations(recieverId.toString());  

        return res.status(200).send('Friend added successfully');

    }catch(err){
        console.log(err);
        return res.status(500).send('Something went wrong. Please try again.');
    }
}

module.exports = postAccept;