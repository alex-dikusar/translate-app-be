import { Controller, Get } from '@nestjs/common';
import { SearchService } from './search.service';
import { ROUTE_SEARCH } from '../constants';

@Controller()
export class SearchController {
  constructor(private readonly appService: SearchService) {}

  @Get(ROUTE_SEARCH)
  getSearchResult() {
    return this.appService.getAllEntries();
  }
}
