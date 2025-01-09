import { makeExamplesUseCases } from '@application/examples';

export default async function exampleRoutes(fastify: FastifyRouteInstance) {
  const example = makeExamplesUseCases(fastify.diContainer.cradle);

  fastify.route({
    method: 'POST',
    url: '/api/v1/examples',
    schema: {
      body: {
        type: 'object',
        properties: {
          title: { type: 'string' },
        },
        required: ['title'],
      },
      response: {
        201: {
          type: 'object',
          properties: {
            id: { type: 'number' },
          },
        },
      },
      400: { $ref: 'ExceptionResponse#' },
      tags: ['example'],
    },
    async handler(req, res) {
      const post = await example.createExample(req.body);

      res.status(201).send(post);
    },
  });

  fastify.route({
    method: 'DELETE',
    url: '/api/v1/examples/:id',
    schema: {
      params: {
        type: 'object',
        properties: {
          id: { type: 'number' },
        },
        required: ['id'],
      },
      response: {
        200: {},
        400: { $ref: 'ExceptionResponse#' },
      },
      tags: ['example'],
    },
    async handler(req, res) {
      await example.deleteExample({ id: req.params.id });

      res.status(200).send({});
    },
  });

  fastify.route({
    method: 'GET',
    url: '/api/v1/examples/:id',
    schema: {
      params: {
        type: 'object',
        properties: {
          id: { type: 'number' },
        },
        required: ['id'],
      },
      response: {
        200: {
          type: 'object',
          properties: {
            id: { type: 'number' },
            title: { type: 'string' },
          },
        },
        400: { $ref: 'ExceptionResponse#' },
        404: {
          type: 'object',
          properties: {
            message: { type: 'string' },
          },
        },
      },
      tags: ['example'],
    },
    async handler(req, res) {
      const post = await example.getExample({ id: req.params.id });

      if (!post) {
        res.status(404).send({ message: `Example with id ${req.params.id} not found` });
        return;
      }

      res.status(200).send(post);
    },
  });

  fastify.route({
    method: 'GET',
    url: '/api/v1/examples',
    schema: {
      querystring: {
        type: 'object',
        properties: {
          pageNumber: { type: 'integer' },
          pageSize: { type: 'integer' },
        },
        required: ['pageNumber', 'pageSize'],
      },
      response: {
        200: {
          type: 'object',
          properties: {
            count: { type: 'integer' },
            hasPreviousPage: { type: 'boolean' },
            hasNextPage: { type: 'boolean' },
            pageNumber: { type: 'integer' },
            pageSize: { type: 'integer' },
            examples: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  id: { type: 'number' },
                  title: { type: 'string' },
                },
              },
            },
            totalPages: { type: 'integer' },
          },
        },
        400: { $ref: 'ExceptionResponse#' },
      },
      tags: ['example'],
    },
    async handler(req, res) {
      const postList = await example.listExamples({
        pageNumber: req.query.pageNumber,
        pageSize: req.query.pageSize,
      });

      res.status(200).send(postList);
    },
  });
}
