import {type Request, type Response } from 'express';
import registerUser from '../services/user.service';
import {LoginUser} from "../services/user.service";
import AppError from "../errors/AppError.ts";


export async function Login(req: Request, res: Response) {

    const userData = req.body;
        const user = await registerUser(userData);
        res.status(201).json({name: user.name, 
            email: user.email, createdAt: user.createdAt});


}

export async function EnterUser(req: Request, res: Response) {
    const email = req.body?.email;
    const password = req.body?.password;

    if (!email || !password) {
        throw new AppError('Email and password is required',400);
    }

    const user = await LoginUser(email, password);
    res.status(200).json({name: user.name,status: 'Login successfull'});
}


