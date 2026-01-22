import { pgTable, serial, text, integer } from 'drizzle-orm/pg-core';

export const recipes = pgTable('recipes', {
	id: serial('id').primaryKey(),
	name: text('name').notNull(),
	servings: text('servings'),
	ingredients: text('ingredients').array().notNull(),
	instructions: text('instructions').array().notNull(),
	tags: text('tags').array(),
	nutrition: text('nutrition'),
	time: integer('time')
});
