import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';
import { TABLE_NAME_ENTRIES, TABLE_NAME_EXAMPLES } from '../src/entities';

const foreignKey = new TableForeignKey({
  columnNames: ['melingoId'],
  referencedTableName: TABLE_NAME_ENTRIES,
  referencedColumnNames: ['id'],
});

export class ExampleCreateKey1707581049649 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DELETE FROM ${TABLE_NAME_EXAMPLES} WHERE "melingoId" NOT IN (SELECT id FROM ${TABLE_NAME_ENTRIES})`,
    );
    await queryRunner.createForeignKey(TABLE_NAME_EXAMPLES, foreignKey);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(TABLE_NAME_EXAMPLES, foreignKey);
  }
}
