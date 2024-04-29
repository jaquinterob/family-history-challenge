import { Controller, Get } from '@nestjs/common';
import { CompetitorService } from './competitor.service';

@Controller('competitor')
export class CompetitorController {
  constructor(private readonly competitorService: CompetitorService) {}

  @Get()
  findAll() {
    return this.competitorService.findAll();
  }
}
