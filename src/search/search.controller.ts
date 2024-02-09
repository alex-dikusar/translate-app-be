import { Controller, Get, Query } from '@nestjs/common';
import { SearchService } from './search.service';

@Controller()
export class SearchController {
  constructor(private readonly appService: SearchService) {}

  @Get()
  getSearchResult(@Query('search') search: string) {
    return this.appService.getEntry(search);
  }
}
