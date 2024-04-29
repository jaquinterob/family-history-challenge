import { Injectable } from '@nestjs/common';

@Injectable()
export class CompetitorService {
  findAll() {
    return `This action returns all competitor`;
  }
}
