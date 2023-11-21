import express from "express";
import cors from "cors";
import * as http from "http";
import * as https from "https";

export class ExpressServer {
    private static readonly PORT: number = 8800;
    private app: express.Application;
    private server: http.Server | https.Server;
    private port: string | number;

    constructor() {
        this.createApp();
        this.config();
        this.createServer();        
        this.listen();
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
    }
}
