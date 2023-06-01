import { knex as setupeKnex, Knex } from 'knex'

import { env } from './env'

const connection =
  env.DATABASE_CLIENT === 'sqlite'
    ? {
        filename: env.DATABASE_URL,
      }
    : env.DATABASE_URL

export const config: Knex.Config = {
  client: env.DATABASE_CLIENT,
  connection,
  // This config is because sqlite doesn't insert default values
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const knex = setupeKnex(config)
