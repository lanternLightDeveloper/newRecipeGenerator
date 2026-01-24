import { pgTable, serial, integer, text } from 'drizzle-orm/pg-core';
import { varchar } from 'drizzle-orm/pg-core';

export const recipes = pgTable('recipes', {
	key_id: serial('key_id').primaryKey(),
	id: integer('id').notNull(), // your original category-specific ID
	name: text('name').notNull(),
	servings: integer('servings'),
	ingredients: text('ingredients').array(),
	instructions: text('instructions').array(),
	tags: text('tags').array(),
	nutrition: text('nutrition'),
	time: integer('time'),
	creator: text('creator').default('Unknown'),
	category: text('category').notNull()
});
