const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
  socket.on('click', (data) => {
    io.emit('move', data);
  });
});

server.listen(process.env.PORT);
