import { DataSource, DataSourceOptions } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { config } from 'dotenv';
import { ENTITIES_PATH, MIGRATIONS_PATH } from './constants';

config();

export const dbDataSource: DataSourceOptions = {
  type: process.env.DB_TYPE as PostgresConnectionOptions['type'],
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  password: process.env.DB_PASSWORD,
  username: process.env.DB_USER,
  database: process.env.DB_NAME,
  entities: [ENTITIES_PATH],
  migrations: [MIGRATIONS_PATH],
  synchronize: false,
  migrationsRun: false,
};

export default new DataSource(dbDataSource);
