import {rooms} from '../db/schema.ts';
import db from '../index.ts'


async function getAllRooms() {

    const allRooms = await db.select().from(rooms)
   // console.log(allRooms)
    return allRooms


}


export { getAllRooms }

