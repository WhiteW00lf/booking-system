import {type Request, type Response} from 'express';
import { fetchAllRooms, addRoom } from '../services/room.service.ts';

async function getRooms(req: Request, res: Response) {

    const allRooms = await fetchAllRooms();


    res.status(200).json(allRooms);


}

async function createRoom(req: Request, res: Response) {
    const newRoom = req.body;
    const insertedRoom = await addRoom(newRoom);
    res.status(201).json(insertedRoom);

}

export { getRooms,createRoom }