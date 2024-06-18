const User = require('../../models/users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const postLogin = async (req, res) => {
    try{
        const {registration_no, password} = req.body;
        const user = await User.findOne({registration_no});
        if(user && (await bcrypt.compare(password, user.password))){
            //send new token
            const token = jwt.sign({
                userId : user._id,
                registration_no
                },
                process.env.TOKEN_KEY,
                {
                    expiresIn : '24h'
                }
            )
            return res.status(200).json({
                userDetails : {
                    token : token,
                    username : user.username,
                    registration_no : user.registration_no,
                    _id : user._id
                }
            })
        }
        return res.status(400).send('Invalid Credentials : Please try again');



    } catch(err){
        console.log(err);
        return res.status(500).send('Internal Server Error : Please try again later');
    }
}

module.exports = postLogin;