import { useContext } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { SearchContext } from './SearchContext';
import { useGetSearchResultQuery } from '../api';
import Loader from './Loader';
import SearchNoResult from './SearchNoResult';
import SearchResultList from './SearchResultList';

function SearchResult() {
  const { searchStr } = useContext(SearchContext);
  const applySearch = searchStr && searchStr.length > 1;
  const { data, isFetching } = useGetSearchResultQuery(searchStr, {
    skip: !applySearch,
  });

  return (
    <Card sx={{ my: 2, minHeight: '30rem' }}>
      {isFetching ? (
        <Loader mt={12} />
      ) : (
        <CardContent>
          {data && applySearch ? (
            <SearchResultList items={data} />
          ) : (
            <SearchNoResult />
          )}
        </CardContent>
      )}
    </Card>
  );
}

export default SearchResult;
