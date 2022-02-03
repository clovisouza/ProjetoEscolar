import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TipoCursoDto } from 'src/Domain/Dto/TipoCurso.dto';
import { TipoCursoRepository } from 'src/Infraestrutura/Repository/TipoCurso.Repository';

@Injectable()
export class TipoCursoService {
  constructor(
    @InjectRepository(TipoCursoRepository)
    private tipoCursoRepository: TipoCursoRepository,
  ) {}

  async Save(tipoCursoDto: TipoCursoDto): Promise<TipoCursoDto> {
    return this.tipoCursoRepository.Save(tipoCursoDto);
  }

  async FindAll(): Promise<TipoCursoDto[]> {
    const tipoCurso: TipoCursoDto[] = await this.tipoCursoRepository.FindAll();
    return tipoCurso;
  }
  async Find(id: string): Promise<TipoCursoDto> {
    return await this.tipoCursoRepository.findOne({ where: { Id: id } });
  }
  async Update(tipoCursoDto: TipoCursoDto): Promise<TipoCursoDto> {
    return this.tipoCursoRepository.Update(tipoCursoDto);
  }
  async Delete(tipoCursoDto: TipoCursoDto): Promise<TipoCursoDto> {
    return this.tipoCursoRepository.Delete(tipoCursoDto);
  }
}
