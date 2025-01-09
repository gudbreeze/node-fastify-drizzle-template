import { ZodError } from 'zod';

export class BaseException extends Error {
  private code: StatusCode;

  constructor(message: string, code: StatusCode) {
    super();
    this.name = 'BaseException';
    this.message = message;
    this.code = code;
  }
}

export class ValidationException extends Error {
  constructor(error: ZodError) {
    super('APPLICATION_VALIDATION_ERROR');
    this.name = 'ValidationException';
    this.errors = error.issues.map((issue) => ({
      path: issue.path.join('.'),
      message: issue.message,
    }));
  }

  errors: { path: string; message: string }[];
}

export class DatabaseException extends BaseException {
  constructor(message: string, code = 500 as StatusCode) {
    super(message, code);
    this.name = 'DatabaseException';
  }
}
