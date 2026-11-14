import express from 'express';
import {getRooms,createRoom} from '../controllers/room.controller.ts';

const router = express.Router();
router.get('/rooms', getRooms);
router.post('/room', createRoom)
export default router;