import * as Interfaces from '@application/shared/interfaces';
import { makeConfig } from '@infrastructure/config';
import { Resolver, asFunction, asValue } from 'awilix';

import { db } from './db';
import { makeLogger } from './logger';
import * as repositories from './repositories';

export type DbType = typeof db;

export type Dependencies = {
  config: Interfaces.ApplicationConfig;
  db: DbType;
  logger: Interfaces.Logger;
  examplesRepository: Interfaces.ExamplesRepository;
};

export function makeInfrastructureDependencies(): {
  [dependency in keyof Dependencies]: Resolver<Dependencies[dependency]>;
} {
  const config = makeConfig();
  const logger = makeLogger(config);

  return {
    config: asValue(config),
    db: asValue(db),
    logger: asValue(logger),
    examplesRepository: asFunction(repositories.makeExamplesRepository).singleton(),
  };
}
