import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { parseCsv } from '../src/utils';
import { Example } from '../src/entities';

const exampleCsvPath = 'csv/Examples.csv';
export const exampleTableName = 'example';

const columns = [
  { name: 'id', type: 'integer', isPrimary: true },
  { name: 'melingoId', type: 'integer' },
  { name: 'text', type: 'varchar', length: '255' },
];

export class ExampleInit1707497413407 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const table = new Table({ name: exampleTableName, columns });
    const rows = await parseCsv(exampleCsvPath);
    await queryRunner.createTable(table, true);
    await queryRunner.manager.getRepository(Example).save(rows, { chunk: 100 });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(exampleTableName);
  }
}
