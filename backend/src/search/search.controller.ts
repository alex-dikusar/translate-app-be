import { Controller, Get, Query } from '@nestjs/common';
import { SearchService } from './search.service';
import { SEARCH_ROUTE } from './constants';

@Controller()
export class SearchController {
  constructor(private readonly appService: SearchService) {}

  @Get(SEARCH_ROUTE)
  getSearchResult(@Query('word') searchQuery: string) {
    return this.appService.getEntry(searchQuery);
  }
}
