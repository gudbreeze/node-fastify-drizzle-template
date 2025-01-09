import app from '@server/app';
import { fastify } from 'fastify';

const server = fastify();

describe('API: Health', () => {
  beforeAll(async () => {
    server.register(app);
    await server.ready();
  });

  afterAll(async () => {
    await server.close();
  });

  it('GET /health', async () => {
    const response = await server.inject({
      method: 'GET',
      url: '/health',
    });
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(JSON.stringify({ status: 'ok' }));
  });
});
