import pino from 'pino';

import { ApplicationConfig, Logger } from '../../application/shared/interfaces';

export function makeLogger(config: ApplicationConfig): Logger {
  return pino({
    level: config.logLevel,
    enabled: config.env !== 'test',
  });
}
