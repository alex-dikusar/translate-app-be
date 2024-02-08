import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getSearchResult() {
    return { searchResult: [] };
  }
}
