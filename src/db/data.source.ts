import { DataSource, DataSourceOptions } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { config } from 'dotenv';

config();

export const dbDataSource: DataSourceOptions = {
  type: process.env.DB_TYPE as PostgresConnectionOptions['type'],
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  password: process.env.DB_PASSWORD,
  username: process.env.DB_USER,
  database: process.env.DB_NAME,
  entities: [process.env.DB_ENTITIES_PATH],
  migrations: [process.env.DB_MIGRATIONS_PATH],
  synchronize: false,
  migrationsRun: false,
};

export default new DataSource(dbDataSource);
