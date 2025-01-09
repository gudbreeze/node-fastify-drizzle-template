import { toDto } from '@application/examples/mappers/get-example';
import { validate } from '@application/examples/validators/get-example';

export type GetExample = Readonly<{
  id: number;
}>;

export function getExample({ examplesRepository }: Pick<Dependencies, 'examplesRepository'>) {
  return async function getExample({ id }: GetExample) {
    await validate({ id });

    const example = await examplesRepository.getById({ id });

    if (!example) {
      return null;
    }

    return toDto(example);
  };
}
