import { knex as setupeKnex, Knex } from 'knex'

import { env } from './env'

export const config: Knex.Config = {
  client: 'sqlite',
  connection: {
    filename: env.DATABASE_URL,
  },
  // This config is because sqlite doesn't insert default values
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const knex = setupeKnex(config)
