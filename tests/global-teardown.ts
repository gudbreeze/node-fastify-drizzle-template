import { client } from '@config/db.testing';
import 'tsconfig-paths/register';

export default async function () {
  try {
    await client.close();
  } catch (error) {
    /* eslint-disable-next-line */
    console.error(`La base de datos no se cerró correctamente. ${error}`);
    process.exit(1);
  }
}
