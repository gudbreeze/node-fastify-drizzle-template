import { DeleteExampleCommand } from '@application/examples/use-cases/delete-example';
import { ValidationException } from '@application/shared/exceptions';
import { ZodError, z } from 'zod';

export async function validate(command: DeleteExampleCommand) {
  try {
    const schema: z.ZodType<DeleteExampleCommand> = z.object({
      id: z.number().int(),
    });

    await schema.parseAsync(command);
  } catch (error) {
    throw new ValidationException(error as ZodError);
  }
}
