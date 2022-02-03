import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoCursoController } from 'src/Controller/TipoCurso.controller';
import { TipoCurso } from 'src/Domain/Entites/TipoCurso.entity';
import { TipoCursoService } from 'src/Service/TipoCurso.Service';
import { TipoCursoRepository } from '../Infraestrutura/Repository/TipoCurso.Repository';

@Module({
  imports: [TypeOrmModule.forFeature([TipoCurso, TipoCursoRepository])],
  controllers: [TipoCursoController],
  providers: [TipoCursoService],
})
export class TipoCursoModule {}
