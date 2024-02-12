import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Entry } from '../entities';
import { SEARCH_LIMIT } from '../constants';

@Injectable()
export class SearchService {
  constructor(
    @InjectRepository(Entry)
    private readonly entriesRepository: Repository<Entry>,
  ) {}

  async getEntry(searchQuery: string): Promise<Entry[]> {
    return this.entriesRepository
      .createQueryBuilder('entry')
      .leftJoinAndSelect('entry.examples', 'example')
      .where('entry ILIKE :searchQuery', { searchQuery: `%${searchQuery}%` })
      .take(SEARCH_LIMIT)
      .getMany();
  }
}
