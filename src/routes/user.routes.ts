import express from 'express';
import {Login,EnterUser} from '../controllers/user.controller.ts';


let routerUser = express.Router();
routerUser.post('/', Login);
routerUser.post('/login', EnterUser);
export default routerUser;