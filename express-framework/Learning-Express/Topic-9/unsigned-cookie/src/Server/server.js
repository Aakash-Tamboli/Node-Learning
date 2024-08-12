import express from 'express';
import route from '../Routes/routes.js';
import cookieParser from 'cookie-parser';

const app = express();
app.use(cookieParser());
app.use(route);


const PORT = 5000;
app.listen(PORT,()=>{
console.log(`Server is listening at ${PORT}...`);
});
