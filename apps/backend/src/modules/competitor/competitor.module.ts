import { Module } from '@nestjs/common';
import { CompetitorService } from './competitor.service';
import { CompetitorController } from './competitor.controller';
import { Competitor, competitorSchema } from './schemas/competitor.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Competitor.name,
        schema: competitorSchema,
      },
    ]),
  ],
  controllers: [CompetitorController],
  providers: [CompetitorService],
})
export class CompetitorModule {}
