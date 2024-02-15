import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { DATABASE_URL } from '$env/static/private';

export const conn = neon(DATABASE_URL);
export const db = drizzle(conn);