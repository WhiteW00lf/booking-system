import { sql } from 'drizzle-orm';
import { check, integer, pgTable, timestamp, unique, uuid, varchar } from 'drizzle-orm/pg-core';


export const rooms = pgTable("rooms", {
    id: uuid('id').defaultRandom().primaryKey(),
    name: varchar('name', {length: 100}).notNull(),
    capacity: integer('capacity').notNull(),
    floor: integer('floor').notNull(),
    created_at: timestamp('created_at', {withTimezone: true}).notNull().defaultNow()
}, (table) => [
    unique("rooms_floor_name_unique").on(table.floor, table.name),
    check("capacity_positive", sql`${table.capacity} > 0`)
]);