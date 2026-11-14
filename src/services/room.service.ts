import AppError from '../errors/AppError.ts';
import { getAllRooms } from '../repositories/room.repository.ts';
import { insertRoom } from '../repositories/room.repository.ts';
import type { NewRoom } from '../repositories/room.repository.ts';

async function fetchAllRooms() {
    const allRooms = await getAllRooms();
    return allRooms;
}

async function addRoom(Room: NewRoom){
  
    if(Room.capacity <= 0 || !Number.isInteger(Room.capacity)){
        throw new AppError('Room capacity must be greater than 0', 400);
    }else if ( typeof Room.name !== 'string' || Room.name.trim() === '') {
        throw new AppError('Room name must not be empty', 400);
    }else if(Room.floor <= 0 || !Number.isInteger(Room.floor)){
        throw new AppError('Room floor must be a positive number', 400);
    }

    const cleanedRoom = {
        name: Room.name.trim(),
        capacity: Room.capacity,
        floor: Room.floor
    };

    try{
    const insertedRoom = await insertRoom(cleanedRoom);
    return insertedRoom;
    

    }catch(err){


        if(err instanceof Error){
            if(err.cause !== null && typeof err.cause === 'object'){
                if (err.cause.constraint === 'rooms_floor_name_unique' && err.cause.code === '23505') {
                    throw new AppError('Room with the same name already exists on this floor', 409);
                }
            }
        }

        throw err;
       
}
}
export { fetchAllRooms, addRoom }