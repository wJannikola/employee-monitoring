import express from "express";
import path from "path";
import mongoose = require('mongoose');
import cors from "cors";
import bodyParser from "body-parser";
import * as http from "http";
import { userRoutes } from './routers/user';
import { employeeRoutes } from './routers/employee';

mongoose.connect('mongodb://127.0.0.1:27017/employees', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => {
    console.log('Database sucessfully connected')
},
    error => {
        console.log('Database could not connected: ' + error)
    }
)

export class Server {
    public static readonly PORT: number = 3000;
    private app: express.Application;
    private server: http.Server;
    private port: string | number;

    constructor() {
        this.createApp();
        this.config();
        this.createServer();
        this.listen();
    }

    private createApp(): void {
        this.app = express();
        this.app.use(cors());
        this.app.use(bodyParser());
        this.app.use(userRoutes);
        this.app.use(employeeRoutes);
    }

    private createServer(): void {
        this.server = http.createServer(this.app);
    }

    private config(): void {
        this.port = process.env.PORT || Server.PORT;
    }

    private listen(): void {
        this.server.listen(this.port, () => {
            console.log("Running server on port %s", this.port)
        })
    }

    public getApp(): express.Application {
        return this.app;
    }
}