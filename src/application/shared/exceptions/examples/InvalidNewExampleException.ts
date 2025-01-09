import { BaseException } from '../../../../application/shared/exceptions';

export class InvalidNewExampleException extends BaseException {
  constructor(message: string, code = 500 as StatusCode) {
    super(message, code);
    this.name = 'InvalidNewExampleException';
  }
}
