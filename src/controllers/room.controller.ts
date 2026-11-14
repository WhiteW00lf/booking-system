import {type Request, type Response} from 'express';
import { fetchAllRooms } from '../services/room.service.ts';

async function getRooms(req: Request, res: Response) {

    const allRooms = await fetchAllRooms();


    res.status(200).json(allRooms);


}

export { getRooms }