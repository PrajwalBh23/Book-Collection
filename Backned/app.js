import express from "express";
import dotenv from 'dotenv';
import bodyParser from "body-parser";
import router from "./routes/book-routes.js";
import { fileURLToPath } from 'url';
import './db/connection.js';
import cors from 'cors';
import path from 'path'


const app = express();

dotenv.config({ path: './config.env' });
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.json({ limit: "30mb", extended: true })); 
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

const allowedOrigins = ['http://localhost:3000']; 
app.use(cors(({
  origin: allowedOrigins,
})));


app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

app.use('/books', router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is on ${PORT}`);
});
