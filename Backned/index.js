import express from "express";
import dotenv from 'dotenv';
import cors from "cors";
import bodyParser from "body-parser";
import './db/connection.js';
import postRouter from './routes/post.js'

const app = express();
app.use(cors());

dotenv.config({path:'./config.env'})

app.use('/' , postRouter);


const PORT = process.env.PORT || 5000;

app.use(bodyParser.json({limit:"30mb", extended:true}));     // sending images is not greater than 30 MB
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));

app.listen(PORT,()=>{
    console.log(`server is on ${PORT}`)
})
