import { NextFunction, Request, Response } from 'express';

export class ErrorMiddleware {
    static add() {
        return (err: any, req: Request, res: Response, next: NextFunction) => {
            res.status(400).json({
                success: false,
                message: err.message,
                error: err.stack || err,
                data: err.data
            });
        };
    }
}
