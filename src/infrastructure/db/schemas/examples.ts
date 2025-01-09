import { integer, pgTable, varchar } from 'drizzle-orm/pg-core';

import { timestamps } from '../columns.helpers';

export const examples = pgTable('examples', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar({ length: 255 }).notNull(),
  ...timestamps,
});
