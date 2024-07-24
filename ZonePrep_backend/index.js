const express = require('express')
const http = require('http')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const User = require('./models/users')

const socketServer = require('./socketServer')
const friendInvitationRoutes = require('./routes/friendInvitationRoutes')
const authRoutes = require('./routes/authRoutes')

const PORT = process.env.PORT || process.env.API_PORT;

const app = express();
app.use(express.json());
app.use(cors());

//registering the routes
app.use('/api/auth', authRoutes);
app.use('/api/friend-invitation', friendInvitationRoutes);

const server =  http.createServer(app);
socketServer.registerSocketServer(server);

const abc = async ()=>{
    try {
        const registration_no = "20214220"; // Ensure this is a string
        console.log(`Searching for user with registration_no: ${registration_no}`);
        
        const user = await User.findOne({ registration_no });
        if (!user) {
            console.log(`User with registration_no ${registration_no} not found.`);
        } else {
            console.log('User found:', user);
        }
    } catch (error) {
        console.error('Error fetching user:', error);
    }
}


mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log('Connected to DataBase....'); 
    server.listen(PORT, ()=>{
        console.log( `Server is listening on port ${PORT}....`);
    })
}).then(abc) 
.catch((err)=>{
    console.log("Database connection failed! Server not started!")
    console.log(err);
})