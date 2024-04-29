import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Competitor } from './schemas/competitor.schema';
import { Model } from 'mongoose';

@Injectable()
export class CompetitorService {
  constructor(
    @InjectModel(Competitor.name)
    private readonly competitorModel: Model<Competitor>,
  ) {}
  findAll() {
    return this.competitorModel.find();
  }
}
