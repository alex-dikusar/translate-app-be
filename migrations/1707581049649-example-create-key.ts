import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';
import { entryTableName } from './1707497335826-entry-init';
import { exampleTableName } from './1707497413407-example-init';

const foreignKey = new TableForeignKey({
  columnNames: ['melingoId'],
  referencedTableName: entryTableName,
  referencedColumnNames: ['id'],
});

export class ExampleCreateKey1707581049649 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'DELETE FROM example WHERE "melingoId" NOT IN (SELECT id FROM entry)',
    );
    await queryRunner.createForeignKey(exampleTableName, foreignKey);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(entryTableName, foreignKey);
  }
}
