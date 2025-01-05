import express from 'express'
import cors from 'cors'
import bodyParser from "body-parser";
import cookieParser from 'cookie-parser';
import apiRouter from "./api/routes/routes"

const app = express();

const corsOptions = {
    origin: 'http://localhost:5174',
    credentials: true
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json())

app.use('/api', apiRouter)

export default app;