import {rooms} from '../db/schema.ts';
import db from '../index.ts'

type NewRoom = typeof rooms.$inferInsert;

async function getAllRooms() {

    const allRooms = await db.select().from(rooms)
   // console.log(allRooms)
    return allRooms


}

async function insertRoom(newRoom: NewRoom) {

    const insertedRoom = await db.insert(rooms).values(newRoom).returning();
    
    return insertedRoom[0];
}


export { getAllRooms, insertRoom }

