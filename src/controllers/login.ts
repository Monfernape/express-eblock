import { Request, Response, NextFunction } from 'express';
import { Database } from "../repositories"

export const login = async (req: Request, res: Response, next:NextFunction) => {
    const { userName, password } = req.body
}