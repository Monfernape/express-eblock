import { Request, Response, NextFunction } from 'express';
import { Database } from "../../repositories"
import bcrypt from "bcrypt"

export const login = async (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body

    if(!username || !password) throw new Error('Username and password is required')
    try {
        const user = await Database.userRepository.findUser(username)
        if(!user) throw new Error('User Not Found')
        const passwordMatch = await bcrypt.compare(password, user.password)
        if(passwordMatch) {
            delete user.password
            res.status(200).send(user)
        }
    } catch {
        throw new Error('User Not Found')
    }

}