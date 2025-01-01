# Basic Chat Application

This is a simple chat application built using Node.js, Express, and Socket.IO. The application allows multiple users to join a chat room and exchange messages in real-time.

## Features

- Real-time communication between multiple clients.
- Simple and clean UI for sending and receiving messages.
- Messages are broadcast to all connected clients.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.

## Usage

1. Start the server:

   ```bash
   node index.js
   ```

2. Open your browser and go to `http://localhost:5000`.

3. Open the same URL in multiple tabs or devices to test the real-time chat functionality.

## Code Explanation

### `index.js`

- Sets up an Express server and serves the `index.html` file on the root route (`/`).
- Uses Socket.IO to listen for incoming connections and handle chat messages.
- When a client sends a message (`chat message` event), it broadcasts the message to all connected clients.

### `index.html`

- Contains the HTML structure and styles for the chat interface.
- Includes a form with an input field for sending messages and an unordered list (`<ul>`) for displaying messages.
- Uses JavaScript to handle form submissions, emit chat messages to the server, and append incoming messages to the message list.
