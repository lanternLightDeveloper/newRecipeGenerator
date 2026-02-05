import { pgTable, serial, integer, text, timestamp } from 'drizzle-orm/pg-core';

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

export const users = pgTable('users', {
	id: uuid('id').primaryKey(),
	email: text('email').notNull().unique(),
	name: text('name'),
	passwordHash: text('password_hash').notNull(),
	role: text('role').notNull().default('user'),
	createdAt: timestamp('created_at').defaultNow()
});

export const sessions = pgTable('sessions', {
	id: text('id').primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => users.id, { onDelete: 'cascade' }),
	expiresAt: timestamp('expires_at').notNull()
});
