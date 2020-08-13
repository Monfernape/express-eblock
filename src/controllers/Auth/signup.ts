import { Request, Response, NextFunction } from 'express';
import { Database } from "../../repositories"
import bcrypt from "bcrypt"
import { NotFoundError } from "../../bootstrap/middlewares/NotFoundError";

export const signup = async (req: Request, res: Response, next: NextFunction) => {
    const { username, password, name, phoneNumber, address } = req.body

    if(!username || !password) next(new NotFoundError());
    const isUser = await Database.userRepository.findUser(username)
    if(isUser) next(new NotFoundError("User with same name already exist"))

    const pass = await bcrypt.hash(password, 10)
    try {
        const user = await Database.userRepository.signup({...req.body, password: pass})
        user && res.status(200).send("User created")
    } catch {
        next(new NotFoundError())
    }
}