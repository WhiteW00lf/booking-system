import express from 'express';
import {Login} from '../controllers/user.controller.ts';


let routerUser = express.Router();
routerUser.post('/', Login);
export default routerUser;