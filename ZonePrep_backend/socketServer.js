
const authSocket = require ('./middleware/authSocket');
const newConnectionHandler = require('./socketHandlers/newConnectionHandler');
const disconnectHandler = require('./socketHandlers/disconnectHandler');
const directMessageHandler = require('./socketHandlers/directMessageHandler');
const directChatHistoryHandler = require('./socketHandlers/directChatHistoryHandler');

const serverStore = require('./serverStore');

const registerSocketServer = (server) => {
    const io = require('socket.io')(server, {
        cors: {
            origin: '*',            //allowing everybody while developing the application
            methods: ['GET', 'POST']
        }
    });
    serverStore.setSocketServerInstance(io);

    io.use((socket,next) => {
        authSocket(socket,next);
    })

    const emitOnlineUsers = () => {
        const onlineUsers = serverStore.getOnlineUsers();
        io.emit('online-users', {onlineUsers});               //emiting to all
    }

    io.on('connection', (socket) => {
        console.log('Socket connection established....');
        console.log('socketID-->', socket.id);

        newConnectionHandler(socket, io);
        emitOnlineUsers();

        socket.on('direct-message', (data) => {
            directMessageHandler(socket, data);
        })

        socket.on('direct-chat-history', (data) => {
            directChatHistoryHandler(socket, data);
        });

        socket.on('disconnect', () => {
            console.log(`Socket ${socket.id} disconnected....`);
            disconnectHandler(socket);
        });
    });

    setInterval(() =>{
        emitOnlineUsers();
    }, [8*1000])

}

module.exports = {
    registerSocketServer
};