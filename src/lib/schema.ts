import { integer, pgTable, serial, uniqueIndex, varchar } from 'drizzle-orm/pg-core';

export const schedules = pgTable('schedules', {
	id: serial('id').primaryKey(),
	name: varchar('name', { length: 256 }),
	scheduleStart: integer('from'),
	scheduleEnd: integer('to')
}, (schedules) => {
	return {
		nameIndex: uniqueIndex('name_idx').on(schedules.name)
	}
})

export const people = pgTable('people', {
	id: serial('id').primaryKey(),
	name: varchar('name', { length: 256 }),
	scheduleId: integer('scheduleId').references(() => schedules.id)
});

export const availabilities = pgTable('availabilities', {
	id: serial('id').primaryKey(),
	personId: integer('personId').references(() => people.id),
	from: integer('from'),
	to: integer('to')
});

export const shifts = pgTable('shifts', {
	id: serial('id').primaryKey(),
	scheduleId: integer('scheduleId').references(() => schedules.id),
	personId: integer('personId').references(() => people.id),
	starts: integer('starts'),
	ends: integer('ends'),
	shiftType: varchar('shiftType', { length: 256 })
});