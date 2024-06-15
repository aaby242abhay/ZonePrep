const User = require('../../models/users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



const postRegister = async (req, res) => {
    try{
        const {mail, username, password, registration_no} = req.body;

        const userExists = await User.exists({registration_no})

        if(userExists){
            return res.status(409).send('User already exists');
        }
        const encryptedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            username,
            mail : mail.toLowerCase(),
            registration_no,
            password : encryptedPassword

        })
        const token = jwt.sign({
            userId : user._id,
            registration_no
            },
            process.env.TOKEN_KEY,
            {
                expiresIn : '24h'
            }
        )

        res.status(201).json({
            userDetails : {
                token : token,
                username : user.username,
                registration_no : user.registration_no

            }
        })



    }catch(err){
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
}

module.exports = postRegister; 