import 'dotenv/config';
import { migrate } from 'drizzle-orm/neon-http/migrator';
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

export const conn = neon(process.env.DATABASE_URL);
export const db = drizzle(conn);

await migrate(db, { migrationsFolder: './drizzle' });