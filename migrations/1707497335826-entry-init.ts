import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { parseCsv } from '../src/utils';
import { Entry } from '../src/entities';

const entryCsvPath = 'csv/Entries.csv';
export const entryTableName = 'entry';

const columns = [
  { name: 'id', type: 'integer', isPrimary: true },
  { name: 'pos', type: 'integer' },
  { name: 'entry', type: 'varchar', length: '255' },
  { name: 'translationFull', type: 'varchar', length: '255' },
];

export class EntryInit1707497335826 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const table = new Table({ name: entryTableName, columns });
    const rows = await parseCsv(entryCsvPath);
    await queryRunner.createTable(table, true);
    await queryRunner.manager.getRepository(Entry).save(rows, { chunk: 100 });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(entryTableName);
  }
}
