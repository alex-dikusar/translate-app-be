import { MigrationInterface, QueryRunner } from 'typeorm';
import { TABLE_NAME_ENTRIES, TABLE_ENTRIES_INDEX } from '../src/entities';

export class EntryIndex1707584341202 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE INDEX ${TABLE_ENTRIES_INDEX} ON ${TABLE_NAME_ENTRIES} (entry);`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX IF EXISTS ${TABLE_ENTRIES_INDEX}`);
  }
}
