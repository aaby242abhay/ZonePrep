const { disconnect } = require('mongoose');
const authSocket = require ('./middleware/authSocket');
const newConnectionHandler = require('./socketHandlers/newConnectionHandler');
const disconnectHandler = require('./socketHandlers/disconnectHandler');

const registerSocketServer = (server) => {
    const io = require('socket.io')(server, {
        cors: {
            origin: '*',            //allowing everybody while developing the application
            methods: ['GET', 'POST']
        }
    });

    io.use((socket,next) => {
        authSocket(socket,next);
    })

    io.on('connection', (socket) => {
        console.log('Socket connection established....');
        console.log('socketID-->', socket.id);
        newConnectionHandler(socket, io);

        socket.on('disconnect', () => {
            console.log(`Socket ${socket.id} disconnected....`);
            disconnectHandler(socket);
        });
    });

    return io;
}

module.exports = {
    registerSocketServer
};