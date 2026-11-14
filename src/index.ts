import { config } from 'dotenv';
import {drizzle} from 'drizzle-orm/node-postgres';
import { fileURLToPath } from 'node:url';

config({ path: fileURLToPath(new URL('../.env', import.meta.url)), quiet: true });

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
    throw new Error('DATABASE_URL is not set. Add it to the project root .env file or your environment.');
}

const db = drizzle(databaseUrl);

export default db;