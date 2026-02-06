// $lib/server/rateLimit.ts
import { db } from '$lib/db/index';
import { rate_limits } from '$lib/db/schema';
import { eq, gt } from 'drizzle-orm';

export async function checkRateLimit(key: string, limit: number, windowSec: number) {
	const now = new Date();
	const [entry] = await db.select().from(rate_limits).where(eq(rate_limits.key, key));

	if (!entry) {
		// first request → insert
		const resetAt = new Date(Date.now() + windowSec * 1000);
		await db.insert(rate_limits).values({ id: crypto.randomUUID(), key, count: 1, resetAt });
		return true;
	}

	if (entry.resetAt < now) {
		// window expired → reset count
		const resetAt = new Date(Date.now() + windowSec * 1000);
		await db.update(rate_limits).set({ count: 1, resetAt }).where(eq(rate_limits.id, entry.id));
		return true;
	}

	if (entry.count >= limit) {
		return false; // blocked
	}

	// increment
	await db
		.update(rate_limits)
		.set({ count: entry.count + 1 })
		.where(eq(rate_limits.id, entry.id));

	return true;
}
