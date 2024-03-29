import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SearchController } from './search.controller';
import { SearchService } from './search.service';
import { Entry, Example } from '../entities';

@Module({
  imports: [TypeOrmModule.forFeature([Entry, Example])],
  controllers: [SearchController],
  providers: [SearchService],
})
export class SearchModule {}
