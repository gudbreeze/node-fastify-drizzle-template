  import { Config } from '@jest/types';
  import dotenv from 'dotenv';

  dotenv.config();

  const config: Config.InitialOptions = {
      moduleNameMapper: {
        '^@application/(.*)$': '<rootDir>/src/application/$1',
        '^@domain/(.*)$': '<rootDir>/src/domain/$1',
        '^@infrastructure/(.*)$': '<rootDir>/src/infrastructure/$1',
        '^@server/(.*)$': '<rootDir>/src/server/$1',
        '^@config/(.*)$': '<rootDir>/src/config/$1',
      },
      transform: {
        "^.+\\.tsx?$": "ts-jest",
      },
      preset: 'ts-jest',
      verbose: true,
      globalSetup: "<rootDir>/tests/global-setup.ts",
      globalTeardown: "<rootDir>/tests/global-teardown.ts",
      testEnvironment: 'node',
      collectCoverageFrom: ['src/**/*.ts'],
  };

  export default config;
