import io from 'socket.io'
import { CORS_HOSTS, CORS_METHODS } from '../utils/constants';

export default function registerWebSocket(server) {
    const socket = io(server, {
        path: '/socket',
        cors: {
            origin: CORS_HOSTS.join(),
            methods: CORS_METHODS,
            allowedHeaders: "*",
            credentials: true
        }
    });
    const INIT_TYPE = 'init';
    const ALWAYS_PUSH_TYPE = 'always-push';
    const SEND_TYPE = 'send-chat-from-client';
    const RECEIVE_TYPE = 'receive-chat-from-server';
    let sockets = [];
    socket.on('connection', (skt) => {
        const tag = skt.handshake.query.t;
        console.log(`socket tag = ${tag} has connected`);
        sockets.push(skt);
        skt.emit(INIT_TYPE, {
            tag,
            count: sockets.length
        });
        sockets.forEach(s => {
            s.emit(ALWAYS_PUSH_TYPE, {
                count: sockets.length
            });
        });
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
            console.log(`socket-${tag} got disconnected`);
            sockets = sockets.filter((s) => s !== skt);
            sockets.forEach(s => {
                s.emit(ALWAYS_PUSH_TYPE, {
                    count: sockets.length
                });
            });
        });
    });
}
