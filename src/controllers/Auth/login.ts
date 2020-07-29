import { Request, Response, NextFunction } from 'express';
import bcrypt from "bcrypt"
import { Database } from "../../repositories"

export const login = async (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body
    if(!username || !password) return next(new Error("Password and Username Can't Be Empty"))

    try {
        const user = await Database.userRepository.findUser(username)
        if(!user) throw new Error()
        const passwordMatch = await bcrypt.compare(password, user.password)
        if(passwordMatch) {
            let userData = user.toObject()
            delete userData.password
            res.status(200).send(userData)
        } else res.status(500).send("Unknown Error")
    } catch {
        throw new Error("Normal Junk")
    }

}