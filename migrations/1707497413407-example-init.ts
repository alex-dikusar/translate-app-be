import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
  TableForeignKeyOptions,
} from 'typeorm';
import { parseCsv } from '../src/utils';
import { Example } from '../src/entities';
import { entryTableName } from './1707497335826-entry-init';

const exampleCsvPath = 'csv/Examples.csv';
const exampleTableName = 'example';

const columns = [
  { name: 'id', type: 'integer', isPrimary: true },
  { name: 'melingoId', type: 'integer' },
  { name: 'text', type: 'varchar', length: '255' },
];

const foreignKey: TableForeignKeyOptions = {
  columnNames: ['melingoId'],
  referencedTableName: entryTableName,
  referencedColumnNames: ['id'],
};

export class ExampleInit1707497413407 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const table = new Table({ name: exampleTableName, columns });
    const rows = await parseCsv(exampleCsvPath);
    await queryRunner.createTable(table, true);
    await queryRunner.createForeignKey(
      exampleTableName,
      new TableForeignKey(foreignKey),
    );
    await queryRunner.manager.getRepository(Example).save(rows, { chunk: 100 });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(exampleTableName);
  }
}
