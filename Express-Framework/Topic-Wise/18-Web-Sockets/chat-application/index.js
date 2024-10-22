const express = require('express');
const http = require('http');
const path = require('path');
const {Server} = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);


app.get('/',(request,response)=>{
response.sendFile('/public/index.html',{ root: __dirname  });
});

io.on('connection',(socket) => {

socket.on('chat message',msg =>{
io.emit('chat message', msg);
});

/*
socket.on('disconnect',()=>{
console.log('this method always fire after establishing connection');
}); // this method always fire after established
*/

}); // when new connection established

const PORT = 5000;
server.listen(PORT,()=>{
console.log(`WebSocket Based server is listen at ${PORT}...`);
});
