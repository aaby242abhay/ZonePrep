const serverStore = require('../serverStore');

const disconnectHandler = async (socket) => {
    serverStore.removeConnectedUser(socket.id);
}

module.exports = disconnectHandler;