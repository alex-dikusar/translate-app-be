import { MigrationInterface, QueryRunner, TableIndex } from 'typeorm';

const tableName = process.env.DB_TABLE_NAME_ENTRIES;
const entryIndex = new TableIndex({ columnNames: ['entry'] });

export class EntryIndex1707584341202 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createIndex(tableName, entryIndex);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropIndex(tableName, entryIndex);
  }
}
