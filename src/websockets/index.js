import io from 'socket.io'

export default function registerWebSocket(server) {
    const socket = io(server, {
        path: '/socket'
    });
    let count = 0;
    const SEND_TYPE = 'send-chat-from-client';
    const RECEIVE_TYPE = 'receive-chat-from-server';
    let sockets = [];
    socket.on('connection', (skt) => {
        const tag = skt.handshake.query.t;
        console.log(`socket tag = ${tag} has connected`);
        sockets.push(skt);
        count++;
        skt.on(SEND_TYPE, (message) => {
            const data = {
                ...message,
                ip: skt.request.connection.remoteAddress,
                tag
            };
            console.log(`socket-${tag} send data: ${JSON.stringify(data)}`);
            sockets.forEach(s => {
                s.emit(RECEIVE_TYPE, data);
            });
        });
        skt.on('disconnect', () => {
            count--;
            console.log(`socket-${tag} got disconnected`);
            sockets = sockets.filter((s) => s !== skt);
        });
    });
}
