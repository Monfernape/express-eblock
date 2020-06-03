import dotenv from "dotenv"
import express, { Application as ExpressApplication, Response, Request, NextFunction } from "express"
import mongoose from "mongoose"

dotenv.config()
export class Application {
    private app: ExpressApplication = express();
    // private server;
    // private middleware;
    private mongoConnectionString: string

    public boot() {
        this.initializeApplication()
        this.bootDatabase()
    }

    private initializeApplication() {
        this.app.use(express.json())
        this.app.use((req: Request, res: Response, next: NextFunction) => {
            res.header('Access-Control-Allow-Origin', "*")
            res.header('Access-Control-Allow-Headers', "*")
            res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE")
            next()
        })
        this.app.listen((process.env.PORT||3001), () => console.log(`Server started at port ${process.env.PORT}`))
    }

    private bootDatabase() {
        this.mongoConnectionString = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_URI}`
        mongoose.set('useFindAndModify', false)
        mongoose.set('useCreateIndex', true)
        mongoose.set('useUnifiedTopology', true)
        mongoose.set('useNewUrlParser', true)

        mongoose.connect(this.mongoConnectionString, err => {
            err ? console.log("Error In Connection", err) : console.log("Connection Succeeded")
        })
    }

    constructor() {
        this.app = express();
        this.mongoConnectionString = ""
    }
}