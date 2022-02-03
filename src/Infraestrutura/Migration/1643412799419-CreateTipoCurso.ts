import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTipoCurso1643412799419 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'TipoCurso',
        columns: [
          {
            name: 'Id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'Descricao',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'DataInicio',
            type: 'date',
            isNullable: false,
          },
          {
            name: 'DataEncerramento',
            type: 'date',
            isNullable: true,
          },
        ],
      }),
      false,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('TipoCurso');
  }
}
