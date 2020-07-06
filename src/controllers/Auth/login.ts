import { Request, Response, NextFunction } from 'express';
import { Database } from "../../repositories"

export const login = async (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body

    if(!username || !password) throw new Error('Username and password is required')
    const user = await Database.userRepository.login(username, password)
    
    if(!user) throw new Error('Wrong username or password')
    else {
        delete user.password
        res.status(200).send({user})
    }
}