import express, {Application, Response, Request, NextFunction} from "express"

const app: Application = express()

const add = (a: number, b: number): number => a+b

app.get("/", (req: Request, res: Response, next: NextFunction) => {
    console.log(add(1,1))
    res.send("Hello Bois")
})

app.listen(3001, () => console.log("Server started at port 3001"))