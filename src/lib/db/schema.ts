// $lib/db/schema

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
	id: text('id').primaryKey(),
	email: text('email').notNull().unique(),
	passwordHash: text('password_hash').notNull(),
	name: text('name'),
	createdAt: timestamp('created_at').defaultNow(),
	role: text('role').notNull().default('user')
});

export const sessions = pgTable('sessions', {
	id: text('id').primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => users.id, { onDelete: 'cascade' }),
	expiresAt: timestamp('expires_at').notNull(),
	csrfToken: text('csrf_token').notNull()
});

export const rate_limits = pgTable('rate_limits', {
	id: text('id').primaryKey(),
	key: text('key').notNull(),
	count: integer('count').notNull().default(1),
	resetAt: timestamp('reset_at').notNull()
});
