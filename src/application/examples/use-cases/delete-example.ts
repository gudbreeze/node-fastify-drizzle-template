import { validate } from '@application/examples/validators/delete-example';

export type DeleteExampleCommand = Readonly<{
  id: number;
}>;

export function deleteExample({ examplesRepository }: Pick<Dependencies, 'examplesRepository'>) {
  return async function deleteExampleCommand(command: DeleteExampleCommand) {
    await validate(command);

    const { id } = command;

    await examplesRepository.delete({ id });
  };
}
