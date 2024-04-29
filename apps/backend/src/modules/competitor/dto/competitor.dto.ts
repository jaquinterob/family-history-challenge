import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString } from 'class-validator';

export class CompetitorDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}

export class UpdateCompetitorDto extends PartialType(CompetitorDto) {}
