import { getAllRooms } from '../repositories/room.repository.ts';
import { insertRoom } from '../repositories/room.repository.ts';
import type { NewRoom } from '../repositories/room.repository.ts';

async function fetchAllRooms() {
    const allRooms = await getAllRooms();
    return allRooms;
}

async function addRoom(Room: NewRoom){
    if(Room.capacity <= 0 || !Number.isInteger(Room.capacity)){
        throw new Error('Room capacity must be greater than 0');
    }else if ( typeof Room.name !== 'string' || Room.name.trim() === '') {
        throw new Error('Room name must not be empty');
    }else if(Room.floor <= 0 || !Number.isInteger(Room.floor)){
        throw new Error('Room floor must be a positive number');
    }

    const cleanedRoom = {
        name: Room.name.trim(),
        capacity: Room.capacity,
        floor: Room.floor
    };
    const insertedRoom = await insertRoom(cleanedRoom);
    return insertedRoom;
    

}

export { fetchAllRooms, addRoom }