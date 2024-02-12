import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SearchModule } from './search/search.module';
import { dbDataSource } from './db/data.source';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(dbDataSource),
    SearchModule,
  ],
})
export class AppModule {}
