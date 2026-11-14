import { getAllRooms } from '../repositories/room.repository.ts';

async function fetchAllRooms() {
    const allRooms = await getAllRooms();
    return allRooms;
}


export { fetchAllRooms }