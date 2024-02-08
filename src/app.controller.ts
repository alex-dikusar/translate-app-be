import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ROUTE_SEARCH } from './routes';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(ROUTE_SEARCH)
  getSearchResult() {
    return this.appService.getSearchResult();
  }
}
