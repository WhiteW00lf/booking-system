import { createUser, type UserData } from '../repositories/user.repository';
import bcrypt from 'bcrypt';
import AppError from "../errors/AppError.ts";

type RegistrationInput = {
    name: string;
    email: string;
    password: string;
}
async function registerUser(data: RegistrationInput) {
    if(data === null || typeof data !== 'object' || Array.isArray(data)) {
        throw new AppError('Empty data is not accepted',400)
    }

    if (typeof data.name !== 'string' || data.name == '' || data.name.trim().length <= 1 ) {
        throw new AppError('Please enter a valid name', 400);
    }
    if (typeof data.email !== 'string' || data.email.trim() == '' || data.email.trim().length <= 5 ) {
        throw new AppError('Please enter a valid email', 400);
    }
    if (typeof data.password !== 'string' || data.password == '' || data.password.length < 6 ) {
        throw new AppError('Please enter a valid password with at least 6 characters',400);
    }

    let hashy = data.password;
    hashy = await bcrypt.hash(hashy, 10);
    const newUser = {
        name: data.name.trim(),
        email: data.email.trim().toLowerCase(),
        passwordHash : hashy
    }

    try{
        const user = await createUser(newUser);
        return user;
}catch(err){

        if(err instanceof Error){
            if(err.cause !== null && typeof err.cause === 'object'){
                if (err.cause.constraint === 'users_email_key' && err.cause.code === '23505') {
                    throw new AppError('User with the same email already exists', 409);
                }
            }

        }

        throw err;

    }
}


export default registerUser;