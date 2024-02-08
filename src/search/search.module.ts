import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SearchController } from './search.controller';
import { SearchService } from './search.service';
import { EntryEntity, ExampleEntity } from '../entities';

@Module({
  imports: [TypeOrmModule.forFeature([EntryEntity, ExampleEntity])],
  controllers: [SearchController],
  providers: [SearchService],
})
export class SearchModule {}
