import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TipoCursoDto } from 'src/Domain/Dto/TipoCurso.dto';
import { TipoCursoService } from 'src/Service/TipoCurso.Service';

@Controller('TipoCurso')
export class TipoCursoController {
  constructor(private readonly tipocursoService: TipoCursoService) {}

  logger: Logger = new Logger(TipoCursoController.name);

  @Get('')
  async getTipoCurso(): Promise<TipoCursoDto[]> {
    try {
      return await this.tipocursoService.FindAll();
    } catch (error) {
      this.logger.error(error?.message ?? '');
      throw error;
    }
  }

  @Get('/:Id')
  async getTipoCursoId(@Param('Id') id: string): Promise<TipoCursoDto> {
    try {
      return await this.tipocursoService.Find(id);
    } catch (error) {
      this.logger.error(error?.message ?? '');
      throw error;
    }
  }

  @Post()
  async create(@Body() tipoCursoDto: TipoCursoDto) {
    try {
      return await this.tipocursoService.Save(tipoCursoDto);
    } catch (error) {
      this.logger.error(error?.message ?? '');
      throw error;
    }
  }

  @Put()
  async Alterar(@Body() tipoCursoDto: TipoCursoDto) {
    try {
      return await this.tipocursoService.Update(tipoCursoDto);
    } catch (error) {
      this.logger.error(error?.message ?? '');
      throw error;
    }
  }

  @Delete()
  async Delete(@Body() tipoCursoDto: TipoCursoDto) {
    try {
      return await this.tipocursoService.Delete(tipoCursoDto);
    } catch (error) {
      this.logger.error(error?.message ?? '');
      throw error;
    }
  }
}
