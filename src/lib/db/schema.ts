// $lib/db/schema

import { pgTable, pgEnum, serial, integer, text, timestamp, boolean } from 'drizzle-orm/pg-core';

export const recipes = pgTable('recipes', {
	key_id: serial('key_id').primaryKey(),
	id: integer('id').notNull(),
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

export const userRole = pgEnum('user_role', ['user', 'author', 'editor', 'admin']);

export const users = pgTable('users', {
	id: serial('id').primaryKey(),
	email: text('email').notNull().unique(),
	passwordHash: text('password_hash').notNull(),
	name: text('name'),
	createdAt: timestamp('created_at').defaultNow(),
	role: userRole('role').notNull().default('user')
});

export const sessions = pgTable('sessions', {
	id: text('id').primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => users.id, { onDelete: 'cascade' }),
	expiresAt: timestamp('expires_at').notNull(),
	csrfToken: text('csrf_token').notNull()
});

export const dietaryRestrictions = pgTable('dietary_restrictions', {
	id: text('key_id').primaryKey(),
	name: text('name').notNull().unique()
});

export const userDietaryRestrictions = pgTable('user_dietary_restrictions', {
	id: text('id').primaryKey(),
	userId: integer('user_id')
		.notNull()
		.references(() => users.id, { onDelete: 'cascade' }),
	restrictionId: integer('restriction_id')
		.notNull()
		.references(() => dietaryRestrictions.id, { onDelete: 'cascade' }),
	createdAt: timestamp('created_at').defaultNow()
});

export const favoriteRecipes = pgTable('favorite_recipes', {
	id: serial('id').primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => users.id, { onDelete: 'cascade' }),
	recipeId: integer('recipe_id')
		.notNull()
		.references(() => recipes.key_id, { onDelete: 'cascade' }),
	createdAt: timestamp('created_at').defaultNow()
});

export const dontLikeRecipes = pgTable('dont_like_recipes', {
	id: serial('id').primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => users.id, { onDelete: 'cascade' }),
	recipeId: integer('recipe_id')
		.notNull()
		.references(() => recipes.key_id, { onDelete: 'cascade' }),
	createdAt: timestamp('created_at').defaultNow()
});

export const authorApplications = pgTable('author_applications', {
	id: serial('id').primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => users.id, { onDelete: 'cascade' }),
	status: text('status').notNull().default('pending'), // pending | approved | rejected
	createdAt: timestamp('created_at').defaultNow(),
	reviewedAt: timestamp('reviewed_at'),
	reviewerId: text('reviewer_id').references(() => users.id)
});

export const password_resets = pgTable('password_resets', {
	id: text('id').primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => users.id, { onDelete: 'cascade' }),
	token: text('token').notNull().unique(),
	expiresAt: timestamp('expires_at').notNull(),
	used: boolean('used').notNull().default(false)
});
