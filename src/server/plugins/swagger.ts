import Swagger from '@fastify/swagger';
import SwaggerUI from '@fastify/swagger-ui';
import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';

async function swaggerGeneratorPlugin(fastify: FastifyInstance) {
  await fastify.register(Swagger, {
    swagger: {
      info: {
        title: 'api-template',
        description: 'Swagger API documentation.',
        version: '0.1.0',
      },
      schemes: ['http', 'https'],
      consumes: ['application/json'],
      produces: ['application/json', 'text/html'],
    },
  });

  await fastify.register(SwaggerUI, {
    routePrefix: '/api-docs',
  });

  fastify.log.info(`Swagger documentation is available at /api-docs`);
}

export default fp(swaggerGeneratorPlugin, {
  name: 'swaggerGenerator',
});
