import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoCursoModule } from './Module/TipoCurso.module';

@Module({
  imports: [TypeOrmModule.forRoot(), TipoCursoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
