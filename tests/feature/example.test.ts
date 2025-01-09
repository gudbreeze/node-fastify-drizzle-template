import { db } from '@infrastructure/db';
import app from '@server/app';
import { migrate } from 'drizzle-orm/pglite/migrator';
import { fastify } from 'fastify';

const server = fastify();

describe('Example Routes (Feature)', () => {
  beforeAll(async () => {
    await migrate(db, { migrationsFolder: 'drizzle' });
    server.register(app);
    await server.ready();
  });

  afterAll(async () => {
    await server.close();
  });

  it('should create and list examples via API', async () => {
    const response = await server.inject({
      method: 'POST',
      url: '/api/v1/examples',
      payload: { title: 'API Example' },
    });

    expect(response.statusCode).toBe(201);

    const listResponse = await server.inject({
      method: 'GET',
      url: '/api/v1/examples',
      query: {
        pageNumber: String(1),
        pageSize: String(10),
      },
    });

    expect(listResponse.json().examples).toHaveLength(1);
  });
});
