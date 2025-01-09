import { Example } from '@domain/entities';

export interface ExamplesRepository {
  create(parameters: { example: Example }): Promise<{ id: number }>;
  delete(parameters: { id: number }): Promise<void>;
  getById(parameters: { id: number }): Promise<Example | null>;
  list(parameters: { pageNumber: number; pageSize: number }): Promise<{ count: number; examples: Array<Example> }>;
}
