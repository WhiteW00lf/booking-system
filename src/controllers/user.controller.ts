import {type Request, type Response } from 'express';
import registerUser from '../services/user.service';



async function register(req: Request, res: Response) {

        const user = await registerUser(req.body);
        res.status(201).json({name: user.name, 
            email: user.email, createdAt: user.createdAt});


}

export default register;
