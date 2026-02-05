// src/lib/server/rateLimit.ts
import { db } from '$lib/db';
import { rateLimits } from '$lib/db/schema';
import { eq } from 'drizzle-orm';
import { error } from '@sveltejs/kit';

export async function rateLimit({
	key,
	limit,
	windowMs
}: {
	key: string;
	limit: number;
	windowMs: number;
}) {
	const now = new Date();

	const existing = await db.select().from(rateLimits).where(eq(rateLimits.key, key)).limit(1);

	if (existing.length === 0) {
		await db.insert(rateLimits).values({
			key,
			count: 1,
			resetAt: new Date(now.getTime() + windowMs)
		});
		return;
	}

	const entry = existing[0];

	if (entry.resetAt < now) {
		await db
			.update(rateLimits)
			.set({
				count: 1,
				resetAt: new Date(now.getTime() + windowMs)
			})
			.where(eq(rateLimits.key, key));
		return;
	}

	if (entry.count >= limit) {
		throw error(429, 'Too many requests');
	}

	await db
		.update(rateLimits)
		.set({ count: entry.count + 1 })
		.where(eq(rateLimits.key, key));
}
