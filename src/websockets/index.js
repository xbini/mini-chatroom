import io from 'socket.io'

export default function registerWebSocket(server) {
    const socket = io(server, {
        path: '/socket'
    });
    socket.on('connection', (skt) => {
        skt.on('send-chat-from-client', (message) => {
            const data = {
                ...message,
                ip: skt.request.connection.remoteAddress
            }
            console.log(data);
            skt.emit('receive-chat-from-server', data)
        });
    });
}
