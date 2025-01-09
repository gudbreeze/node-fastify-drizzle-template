import { GetExample } from '@application/examples/use-cases/get-example';
import { ValidationException } from '@application/shared/exceptions';
import { ZodError, z } from 'zod';

export async function validate(query: GetExample) {
  try {
    const schema: z.ZodType<GetExample> = z.object({
      id: z.number().int(),
    });

    await schema.parseAsync(query);
  } catch (error) {
    throw new ValidationException(error as ZodError);
  }
}
