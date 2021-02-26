import http from "http"
import { getListeningHandler, onError } from "./utils/tools"
import app from "./app.js"

const port = parseInt(process.env.PORT || 4000, 10);
const server = http.createServer(app);
const onListening = getListeningHandler(server);
app.set('port', port);
server.on('error', onError);
server.on('listening', onListening);
server.listen(port);
