import express from "express";
import cors from "cors";
import * as http from "http";
import * as https from "https";
import { Database } from './database'

export class ExpressServer {
    private static readonly PORT: number = 8800;
    private app: express.Application;
    private server: http.Server | https.Server;
    private port: string | number;
    private sqlDatabase: Database;

    constructor() {
        this.createApp();
        this.config();
        this.createServer();        
        this.listen();
        this.loadDatabase();
        
    }

    public getApp(): express.Application {
        return this.app;
    }

    private createApp(): void {
        this.app = express();
        this.app.use(cors());
    }

    private createServer(): void {
        this.server = http.createServer(this.app);
    }

    private config(): void {
        this.port = process.env.PORT || ExpressServer.PORT;
    }

    private listen(): void {
        this.server.listen(this.port, () => {
          console.log("Running server on port %s", this.port);
        });

        //root endpoint
        this.app.get('/', function(req,res,next){
            console.log("Root endpoint called");
            res.json({ message : 'OK'});
        });
    }

    private loadDatabase():void {
        this.sqlDatabase = new Database();
        this.sqlDatabase.loadDatabases();
    }
}
