import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Entry } from './types';

const SEARCH_API_KEY = 'search';

export const searchApi = createApi({
  reducerPath: SEARCH_API_KEY,
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.APP_API_URL }),
  endpoints: ({ query }) => ({
    getSearchResult: query<Entry[], string | undefined>({
      query: (searchStr) => ({
        url: `?search=${searchStr}`,
      }),
    }),
  }),
});

export const { useGetSearchResultQuery } = searchApi;
