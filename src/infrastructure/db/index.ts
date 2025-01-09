import 'dotenv/config';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { PgliteDatabase } from 'drizzle-orm/pglite';

let db: NodePgDatabase | PgliteDatabase;

if (process.env.NODE_ENV === 'test') {
  /* eslint-disable-next-line */
  db = require('@config/db.testing.ts').db;
} else {
  /* eslint-disable-next-line */
  db = require('@config/db.ts').db;
}

export { db };
