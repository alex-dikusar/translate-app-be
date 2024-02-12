import { MigrationInterface, QueryRunner, TableIndex } from 'typeorm';
import { entryTableName } from './1707497335826-entry-init';

const entryIndex = new TableIndex({ columnNames: ['entry'] });

export class EntryIndex1707584341202 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createIndex(entryTableName, entryIndex);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropIndex(entryTableName, entryIndex);
  }
}
