import { Example } from '@domain/entities';

export function toDto({
  count,
  pageNumber,
  pageSize,
  examples,
}: {
  count: number;
  pageNumber: number;
  pageSize: number;
  examples: Array<Example>;
}) {
  const totalPages = Math.ceil(count / pageSize);

  return {
    count,
    hasPreviousPage: pageNumber > 1,
    hasNextPage: pageNumber < totalPages,
    pageNumber,
    pageSize,
    examples: examples.map((example) => ({
      id: example.id,
      title: example.title,
    })),
    totalPages,
  };
}
