import { ListExamplesQuery } from '@application/examples/use-cases/list-examples';
import { ValidationException } from '@application/shared/exceptions';
import { ZodError, z } from 'zod';

export async function validate(query: ListExamplesQuery) {
  try {
    const schema: z.ZodType<ListExamplesQuery> = z.object({
      pageNumber: z.number().int().min(1),
      pageSize: z.number().int().min(1).max(50),
    });

    await schema.parseAsync(query);
  } catch (error) {
    throw new ValidationException(error as ZodError);
  }
}
