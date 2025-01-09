import 'tsconfig-paths/register';
import { db } from '@infrastructure/db';
import { migrate } from 'drizzle-orm/pglite/migrator';

export default async function () {
  try {
    await migrate(db, { migrationsFolder: 'drizzle' });
  } catch (error) {
    /* eslint-disable-next-line */
    console.error(`No se pudieron ejecutar las migraciones. ${error}`);
    process.exit(1);
  }
}
