# Socket.IO

To understand the philosopy Watch this video from 0:00 to 19:01 [Philosophy of WebSocket and Socket.IO](https://www.youtube.com/watch?v=_h7Pc1woq-I) 

# **Socket.IO with Express.js**

**Socket.IO** is a library that enables real-time, bidirectional, and event-based communication between web clients and servers. It is commonly used in applications like chat apps, collaborative tools, and gaming platforms where real-time data exchange is crucial.

When using **Express.js** as your server-side framework, integrating Socket.IO allows you to easily manage WebSocket connections alongside your existing HTTP routes. Socket.IO automatically falls back to other techniques like long polling when WebSocket is not available.

### **Basic Flow**

1. **Setup Express.js Server**: Create a basic Express.js server.
2. **Integrate Socket.IO**: Attach Socket.IO to the HTTP server instance created by Express.js.
3. **Handle Events**: Define event handlers on both the server and the client to handle real-time communication.
4. **Serve Static Files**: Serve the client-side application using Express.js.

### **Example**

```javascript
// app.js
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve static files
app.use(express.static('public'));

// Handle a connection
io.on('connection', (socket) => {
    console.log('A user connected');
    
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg); // Broadcast the message to all clients
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
```

# Real-Time Chat Application with Express.js and Socket.IO

This project is a simple real-time chat application built using **Express.js** and **Socket.IO**. It demonstrates the basic usage of WebSocket technology for real-time communication between clients and the server.

## Features

- Real-time messaging between connected clients
- Automatic fallback to long polling if WebSockets are not supported
- Simple and clean architecture for easy understanding

### How It Works

1. **Server**: The server is set up using Express.js and Socket.IO. It serves static files from the `public` directory and handles WebSocket connections.

2. **Client**: The client-side code (located in the `public` directory) connects to the server using Socket.IO and allows users to send and receive messages in real-time.

### General Project Structure

```
.
├── public
│   ├── index.html    # Frontend of the chat application
│   └── chat.js       # Client-side Socket.IO logic
├── app.js            # Express.js server with Socket.IO integration
├── package.json      # Project dependencies and scripts
└── README.md         # Project documentation
```

# Next Topic

[HTTP Codes](../19-HTTP-Codes/README.md)
