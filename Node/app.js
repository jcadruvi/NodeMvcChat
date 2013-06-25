var express = require('express');
var app = express();

var io = require('socket.io').listen(app.listen(8080));

io.sockets.on('connection', function (socket) {
	console.log('New connection');
    socket.emit('message', { message: 'welcome to the chat' });
    socket.on('send', function (data) {
        io.sockets.emit('message', data);
    });
});

console.log('Server started');