import {type Request, type Response } from 'express';
import registerUser from '../services/user.service';



export async function Login(req: Request, res: Response) {

    const userData = req.body;
        const user = await registerUser(userData);
        res.status(201).json({name: user.name, 
            email: user.email, createdAt: user.createdAt});


}


