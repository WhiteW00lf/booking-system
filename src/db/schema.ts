import { sql } from 'drizzle-orm';
import { check, integer, pgTable, timestamp, unique, uuid, varchar,text } from 'drizzle-orm/pg-core';


export const rooms = pgTable("rooms", {
    id: uuid('id').defaultRandom().primaryKey(),
    name: varchar('name', {length: 100}).notNull(),
    capacity: integer('capacity').notNull(),
    floor: integer('floor').notNull(),
    createdAt: timestamp('created_at', {withTimezone: true}).notNull().defaultNow()
}, (table) => [
    unique("rooms_floor_name_unique").on(table.floor, table.name),
    check("capacity_positive", sql`${table.capacity} > 0`)
]);

export const users = pgTable("users", {
    id: uuid('id').defaultRandom().primaryKey(),
    name:varchar('name', {length:100}).notNull(),
    email: varchar('email', {length: 255}).notNull().unique(),
    passwordHash: text('password_hash').notNull(),
    createdAt: timestamp('created_at', {withTimezone: true}).notNull().defaultNow()


});

export const bookings = pgTable("bookings", {
    id: uuid('id').defaultRandom().primaryKey(),
    userId: uuid('user_id').notNull().references(() => users.id, { onDelete: 'restrict' }),
    roomId:uuid('room_id').notNull().references(() => rooms.id, { onDelete: 'restrict' }),
    startTime: timestamp('start_time', {withTimezone: true}).notNull(),
    endTime: timestamp('end_time', {withTimezone: true}).notNull(),
    createdAt: timestamp('created_at', {withTimezone: true}).notNull().defaultNow(),
    status: varchar('status', {length: 10}).notNull().default('confirmed'),
   
},
(table) => [
    check("start_before_end", sql`${table.startTime} < ${table.endTime}`),
    check("status_valid", sql`${table.status} IN ('confirmed', 'cancelled')`)
]
);
