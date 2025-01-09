import { Example } from '@domain/entities';

export function toDto(example: Example) {
  return {
    id: example.id,
    title: example.title,
  };
}
