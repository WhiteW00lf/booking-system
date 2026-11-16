import db from '../index';
import {users} from '../db/schema';


type UserData =  typeof users.$inferInsert;

async function createUser(data : UserData) {
    const createdUser = await db.insert(users).values(data).returning();
    return createdUser[0];

}


export { createUser };