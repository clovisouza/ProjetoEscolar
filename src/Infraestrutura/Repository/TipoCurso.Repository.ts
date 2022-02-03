import { v4 as uuidv4 } from 'uuid';
import { TipoCursoDto } from 'src/Domain/Dto/TipoCurso.dto';
import { TipoCurso } from 'src/Domain/Entites/TipoCurso.entity';
import { EntityRepository, Repository } from 'typeorm';
import { Logger } from '@nestjs/common';

@EntityRepository(TipoCurso)
export class TipoCursoRepository extends Repository<TipoCurso> {
  logger: Logger = new Logger(TipoCursoRepository.name);

  Save = async (tipoCursoDto: TipoCursoDto) => {
    try {
      const TipoCurso = this.create();
      TipoCurso.Id = uuidv4();
      TipoCurso.Descricao = tipoCursoDto.Descricao;
      TipoCurso.DataInicio = tipoCursoDto.DataInicio;
      TipoCurso.DataEncerramento = tipoCursoDto.DataEncerramento;
      return await this.save(TipoCurso);
    } catch (error) {
      console.log(error?.message);
      this.logger.error(error?.message ?? '');
      throw error;
    }
  };
  FindAll = async (): Promise<TipoCurso[]> => {
    return await this.find();
  };
  Find = async (Id: string) => {
    return await this.findOne(Id);
  };
  Update = async (tipoCursoDto: TipoCursoDto) => {
    const Id = tipoCursoDto.Id;
    TipoCurso.Id = tipoCursoDto.Id;
    TipoCurso.Descricao = tipoCursoDto.Descricao;
    TipoCurso.DataInicio = tipoCursoDto.DataInicio;
    TipoCurso.DataEncerramento = tipoCursoDto.DataEncerramento;
    await this.update({ Id }, TipoCurso);
    return tipoCursoDto;
  };
  Delete = async (tipoCursoDto: TipoCursoDto) => {
    const TipoCurso = this.create();
    TipoCurso.Id = tipoCursoDto.Id;
    TipoCurso.Descricao = tipoCursoDto.Descricao;
    TipoCurso.DataInicio = tipoCursoDto.DataInicio;
    TipoCurso.DataEncerramento = tipoCursoDto.DataEncerramento;
    await this.delete(TipoCurso);
    return tipoCursoDto;
  };
}
