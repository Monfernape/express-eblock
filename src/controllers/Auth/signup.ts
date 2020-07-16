import { Request, Response, NextFunction } from 'express';
import { Database } from "../../repositories"
import bcrypt from "bcrypt"

export const signup = async (req: Request, res: Response, next: NextFunction) => {
    const { username, password, name, phoneNumber, address } = req.body

    if(!username || !password) throw new Error('Username and password is required')
    const isUser = await Database.userRepository.findUser(username)
    if(isUser) throw new Error("User with same username already exist")

    const pass = await bcrypt.hash(password, 10)
    try {
        const user = await Database.userRepository.signup({...req.body, password: pass})
        user && res.status(200).send("User created")
    } catch {
        res.status(500).send("Unknown Error")
    }
}