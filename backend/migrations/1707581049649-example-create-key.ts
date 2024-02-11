import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

const entryTableName = process.env.DB_TABLE_NAME_ENTRIES;
const exampleTableName = process.env.DB_TABLE_NAME_EXAMPLES;

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
