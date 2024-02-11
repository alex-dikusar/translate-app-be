import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { parseCsv } from '../src/utils';
import { Entry } from '../src/entities';

const csvPath = process.env.DB_CSV_PATH_ENTRIES;
const tableName = process.env.DB_TABLE_NAME_ENTRIES;

const columns = [
  { name: 'id', type: 'integer', isPrimary: true },
  { name: 'pos', type: 'integer' },
  { name: 'entry', type: 'varchar', length: '255' },
  { name: 'translationFull', type: 'varchar', length: '255' },
];

export class EntryInit1707497335826 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const table = new Table({ name: tableName, columns });
    const rows = await parseCsv(csvPath);
    await queryRunner.createTable(table, true);
    await queryRunner.manager.getRepository(Entry).save(rows, { chunk: 100 });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(tableName);
  }
}
