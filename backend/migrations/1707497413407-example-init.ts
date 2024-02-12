import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { parseCsv } from '../src/utils';
import {
  Example,
  TABLE_NAME_EXAMPLES,
  TABLE_CSV_PATH_EXAMPLES,
} from '../src/entities';

const columns = [
  { name: 'id', type: 'integer', isPrimary: true },
  { name: 'melingoId', type: 'integer' },
  { name: 'text', type: 'varchar', length: '255' },
];

export class ExampleInit1707497413407 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const table = new Table({ name: TABLE_NAME_EXAMPLES, columns });
    const rows = await parseCsv(TABLE_CSV_PATH_EXAMPLES);
    await queryRunner.createTable(table, true);
    await queryRunner.manager.getRepository(Example).save(rows, { chunk: 100 });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(TABLE_NAME_EXAMPLES);
  }
}
