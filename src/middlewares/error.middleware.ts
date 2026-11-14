import AppError from '../errors/AppError.ts';
import { type Request, type Response, type NextFunction} from 'express';

function errorMiddleware(err : unknown, _req : Request, res : Response, _next : NextFunction){
    if (err instanceof AppError) {
        return res.status(err.httpStatusCode).json({ error: err.name, message: err.message });
    
    }
    return res.status(500).json({ message: 'Internal Server Error' });
}


export default errorMiddleware;