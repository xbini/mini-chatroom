export function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

export function getListeningHandler(server) {
    return function () {
        const addr = server.address();
        const bind = typeof addr === 'string'
            ? 'pipe ' + addr
            : 'port ' + addr.port;
        console.log('Listening on ' + bind);
    }
}

export function schema(data, message = "operation successful.", status = 0) {
    return {
        status,
        data,
        message
    }
};

export function okMessage(message) {
    return schema(undefined, message);
}

export function errorMessage(message = 'an unknown exception.') {
    return schema(undefined, message, -1);
}
