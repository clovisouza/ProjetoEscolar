import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('TipoCurso')
export class TipoCurso {
  @PrimaryGeneratedColumn('uuid')
  Id: string;

  @Column({ name: 'Descricao', type: 'varchar', length: 100 })
  Descricao: string;

  @Column({ name: 'DataInicio', type: 'date' })
  DataInicio: Date;

  @Column({ name: 'DataEncerramento', type: 'date', nullable: true })
  DataEncerramento: Date;
  static Id: string;
  static Descricao: string;
  static DataInicio: Date;
  static DataEncerramento: Date;
}
