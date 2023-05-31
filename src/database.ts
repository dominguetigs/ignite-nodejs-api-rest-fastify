import 'dotenv/config'

import { knex as setupeKnex, Knex } from 'knex'

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL env not found.')
}

export const config: Knex.Config = {
  client: 'sqlite',
  connection: {
    filename: process.env.DATABASE_URL,
  },
  // This config is because sqlite doesn't insert default values
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const knex = setupeKnex(config)
