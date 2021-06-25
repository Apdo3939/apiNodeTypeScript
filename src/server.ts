import express, { NextFunction, Request, Response } from 'express';
import 'reflect-metadata';
import 'express-async-errors';
import './database';
import {router} from './routes';
import cors from "cors";

const app = express();
app.use(cors());

app.use(express.json());

app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) =>{
    if(err instanceof Error){
        return res.status(400).json({
            error: err.message
        });
    }

    return res.status(500).json({
        status: 'error',
        message: 'internal server error'
    });

});


app.listen(8081, () => console.log('server running in port 8081 in the http://localhost:8081'));