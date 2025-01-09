import { validate } from '@application/examples/validators/create-example';
import { Example } from '@domain/entities';

export type CreateExampleCommand = Readonly<{
  title: string;
}>;

export function createExample({ examplesRepository }: Pick<Dependencies, 'examplesRepository'>) {
  return async function createExampleCommand(command: CreateExampleCommand) {
    await validate(command);

    const example = new Example({
      createdAt: new Date(),
      title: command.title,
    });

    const { id } = await examplesRepository.create({ example });

    return {
      id,
    };
  };
}
