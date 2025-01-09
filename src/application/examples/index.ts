import { createExample } from './use-cases/create-example';
import { deleteExample } from './use-cases/delete-example';
import { getExample } from './use-cases/get-example';
import { listExamples } from './use-cases/list-examples';

export function makeExamplesUseCases(dependencies: Dependencies) {
  return {
    createExample: createExample(dependencies),
    deleteExample: deleteExample(dependencies),
    getExample: getExample(dependencies),
    listExamples: listExamples(dependencies),
  };
}
