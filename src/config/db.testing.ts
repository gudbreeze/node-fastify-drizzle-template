import { drizzle } from 'drizzle-orm/pglite';

// eslint-disable-next-line
const { PGlite } = require('@electric-sql/pglite');
const client = new PGlite();
export const db = drizzle({ client });
export { client };
