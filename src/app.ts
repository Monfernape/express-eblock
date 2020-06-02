import express, {Application, Response, Request, NextFunction} from "express"
import dotenv from "dotenv"

dotenv.config()
const app: Application = express()


app.get("/", (req: Request, res: Response, next: NextFunction) => {
    console.log("Server", process.env.PORT)
    res.send("Hello People")
})

app.listen((process.env.PORT||3001), () => console.log("Server started at port 3001"))