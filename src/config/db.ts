import { drizzle } from 'drizzle-orm/node-postgres';
import { Client } from 'pg';

const client = new Client({
  connectionString: process.env.DATABASE_URL!,
});

client.connect().catch((err) => {
  // eslint-disable-next-line
  console.error('Failed to connect to database:', err);
  process.exit(1);
});

export const db = drizzle(client);
