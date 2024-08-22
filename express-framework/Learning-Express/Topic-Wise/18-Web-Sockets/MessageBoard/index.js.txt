const express = require('express');
const cookieParser = require('cookie-parser');
const http = require('http');
const {Server} = require('socket.io');

const app = express();
const server = http.createServer(app);
const ioCircuit = new Server(server);

const tmpDB = [
    {displayName: "Aakash", username: 'aakash@TM.com', password: 'aakash1234'},
    {displayName: "Gautam", username: 'guatam@TM.com', password: 'gautam1234'},
    {displayName: "Sarthak", username: 'sarthak@TM.com', password: 'sarthak1234'}
]

ioCircuit.use((socket,next) =>{
    const credentials = socket.handshake.auth;
    if(!credentials['username'] || !credentials['password']) throw new Error('Invalid username or password');

    const {username, password} = credentials;

    const usernameExists = tmpDB.find((user) => user.username === username);

    if(!usernameExists) throw new Error('Invalid username or password');

    const passwordExists = tmpDB.find((user)=> user.password === password)

    if(!passwordExists) throw new Error('Invalid username or password');
    
    console.log("An Authenticated User Connected with Circuit");

    socket.broadcast.emit('updateMessageBoard',`~ ${socket.handshake.auth.displayName.toUpperCase()} JOINNED`);

    next();
})

ioCircuit.on('connection',(socket)=>{
    // console.log('A new Plug is attached to Circuit ID: '+socket.id);
    socket.on('newMessage',(message)=>{
        ioCircuit.emit('updateMessageBoard',message+"\n ~"+socket.handshake.auth.displayName);
    })

    socket.on('disconnect',()=>{
        socket.broadcast.emit('updateMessageBoard',`~ ${socket.handshake.auth.displayName.toUpperCase()} LEFT`)
    })

});



// For Authentication Purpose

app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.set('view engine','ejs');

app.get("/",(request,response)=>{
    response.render('index',{ title: 'Login', username: '', password:'', message: ''});
})


app.post('/login',(request,response)=>{
    const { username, password } = request.body;

    const message = 'Invalid username or password'

    if(!username || !password ) return response.status(400).render('index',{title: 'Login', username: username, password: password, message: message})
    
    const user = tmpDB.find((user) =>{
        if(user.username === username) return user;
    });
    
    if(!user || user.password !== password) return response.status(400).render('index',{title: 'Login', username: username, password: password, message: message})

    const displayName = user.displayName
    response.cookie('username',username);
    response.cookie('password',password);
    response.cookie('displayName',displayName);
    response.redirect('/messageBoard');
})

app.get("/messageBoard",(request,response)=>{
    const {username, password, displayName} = request.cookies;
    if(!username || !password) return response.status(400).render('index',{title: 'Login', username: username, password: password, message: 'Login First'})
    response.render('messageBoard',{username: username, password: password, displayName: displayName})
});


const PORT = 5000;
server.listen(PORT,()=>{
    console.log(`WebSocket Server is listening at ${PORT}...`)
})