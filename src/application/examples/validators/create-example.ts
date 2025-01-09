import { CreateExampleCommand } from '@application/examples/use-cases/create-example';
import { ValidationException } from '@application/shared/exceptions';
import { ZodError, z } from 'zod';

export async function validate(command: CreateExampleCommand) {
  try {
    const schema: z.ZodType<CreateExampleCommand> = z.object({
      title: z.string().min(1).max(150),
    });

    await schema.parseAsync(command);
  } catch (error) {
    throw new ValidationException(error as ZodError);
  }
}
