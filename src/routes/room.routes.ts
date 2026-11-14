import express from 'express';
import {getRooms} from '../controllers/room.controller.ts';

const router = express.Router();
router.get('/rooms', getRooms);

export default router;