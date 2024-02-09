import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Entry } from '../entities';

@Injectable()
export class SearchService {
  constructor(
    @InjectRepository(Entry)
    private readonly entriesRepository: Repository<Entry>,
  ) {}

  async getEntry(searchQuery: string): Promise<Entry[]> {
    return this.entriesRepository
      .createQueryBuilder()
      .select()
      .where('entry ILIKE :searchQuery', { searchQuery: `%${searchQuery}%` })
      .getMany();
  }
}
