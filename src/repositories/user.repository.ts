import db from '../index';
import {users} from '../db/schema';
import {eq} from "drizzle-orm";


export type UserData =  typeof users.$inferInsert;

async function createUser(data : UserData) {

    const createdUser = await db.insert(users).values(data).returning();
    if (createdUser.length < 1) {
        throw new Error('No user added');
    }
    return createdUser[0];

}

async function findUserByEmail(email : string) {
    const userExists = await db.select().from(users).where(eq(users.email,email)).limit(1);
    return userExists[0];
}

export { createUser, findUserByEmail };