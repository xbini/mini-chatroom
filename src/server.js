import http from "http"
import { getListeningHandler, onError } from "./utils/tools"
import app from "./app.js"
import registerWebSocket from "./websockets";

const port = parseInt(process.env.PORT || 4000, 10);
const server = http.createServer(app);
const onListening = getListeningHandler(server);

registerWebSocket(server);

server.on('error', onError);
server.on('listening', onListening);
server.listen(port);
