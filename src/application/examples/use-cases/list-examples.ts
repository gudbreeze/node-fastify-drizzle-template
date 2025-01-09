import { validate } from '@application/examples/validators/list-examples';

import { toDto } from '../mappers/list-examples';

export type ListExamplesQuery = Readonly<{
  pageNumber: number;
  pageSize: number;
}>;

export function listExamples({ examplesRepository }: Pick<Dependencies, 'examplesRepository'>) {
  return async function listExamples(query: ListExamplesQuery) {
    await validate(query);

    const { pageNumber, pageSize } = query;

    const { count, examples } = await examplesRepository.list({ pageNumber, pageSize });

    return toDto({
      count,
      pageNumber,
      pageSize,
      examples,
    });
  };
}
