import { JsonSchemaToTsProvider } from '@fastify/type-provider-json-schema-to-ts';
import {
  FastifyBaseLogger,
  FastifyInstance,
  RawReplyDefaultExpression,
  RawRequestDefaultExpression,
  RawServerDefault,
} from 'fastify';

import { Dependencies as InfrastructureDependencies } from '@infrastructure/di';

declare global {
  // eslint-disable-next-line no-var
  var server: FastifyInstance;

  type Dependencies = InfrastructureDependencies;

  type FastifyRouteInstance = FastifyInstance<
    RawServerDefault,
    RawRequestDefaultExpression<RawServerDefault>,
    RawReplyDefaultExpression<RawServerDefault>,
    FastifyBaseLogger,
    JsonSchemaToTsProvider
  >;

  type StatusCode =
    | 200 | 201 | 204
    | 400 | 401 | 403 | 404 | 409 | 422
    | 500 | 502 | 503 | 504

}

declare module '@fastify/awilix' {
  /* eslint-disable-next-line */
  interface Cradle extends Dependencies {}
  /* eslint-disable-next-line */
  interface RequestCradle extends Dependencies {}
}
