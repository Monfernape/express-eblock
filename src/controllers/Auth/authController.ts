import { Request, Response, NextFunction } from 'express';
import { login } from "./login";

export class AuthController {

    public static login(req: Request, res: Response, next:NextFunction){
        login(req, res, next)
    }

    public static signUp(req: Request, res: Response, next:NextFunction){
        //TODO
    }
}