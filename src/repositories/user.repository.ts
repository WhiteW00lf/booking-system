import db from '../index';
import {users} from '../db/schema';


export type UserData =  typeof users.$inferInsert;

async function createUser(data : UserData) {

    const createdUser = await db.insert(users).values(data).returning();
    if (createdUser.length < 1) {
        throw new Error('No user added');
    }
    return createdUser[0];

}


export { createUser };