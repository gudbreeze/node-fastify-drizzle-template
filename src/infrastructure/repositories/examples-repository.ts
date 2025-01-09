import { DatabaseException } from '@application/shared/exceptions';
import { InvalidNewExampleException } from '@application/shared/exceptions/examples/InvalidNewExampleException';
import { ExamplesRepository } from '@application/shared/interfaces';
import { Example } from '@domain/entities';
import { examples } from '@infrastructure/db/schemas/examples';
import { eq } from 'drizzle-orm';

export function makeExamplesRepository({ db, logger }: Dependencies): ExamplesRepository {
  return {
    async create({ example }) {
      try {
        const [newExample] = await db
          .insert(examples)
          .values({
            created_at: example.createdAt,
            title: example.title,
          })
          .returning();

        if (!newExample) {
          throw new InvalidNewExampleException('Failed to create example');
        }

        return {
          id: newExample.id,
        };
      } catch (error) {
        logger.error({ error: `Error inserting example: ${error}` });
        throw new DatabaseException('Could not insert example into database');
      }
    },
    async delete({ id }) {
      await db.delete(examples).where(eq(examples.id, id));
    },
    async getById({ id }) {
      const [example] = await db.select().from(examples).where(eq(examples.id, id)).limit(1);

      if (!example) {
        return null;
      }

      return toEntity(example);
    },
    async list({ pageNumber, pageSize }) {
      const count = await db.$count(examples);

      const exampleList = await db
        .select()
        .from(examples)
        .limit(pageSize)
        .offset((pageNumber - 1) * pageSize);

      return {
        count,
        examples: exampleList.map(toEntity),
      };
    },
  };

  function toEntity(example: typeof examples.$inferSelect) {
    return new Example({
      id: example.id,
      createdAt: example.created_at,
      title: example.title,
    });
  }
}
