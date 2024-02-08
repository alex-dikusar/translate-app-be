import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EntryEntity } from '../entities';

@Injectable()
export class SearchService {
  constructor(
    @InjectRepository(EntryEntity)
    private readonly entriesRepository: Repository<EntryEntity>,
  ) {}

  async getAllEntries(): Promise<EntryEntity[]> {
    return this.entriesRepository.find();
  }
}
