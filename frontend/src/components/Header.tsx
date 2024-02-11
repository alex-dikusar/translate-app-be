import { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import SearchBar from './SearchBar';
import { SearchContext } from './SearchContext';

function Header() {
  const { setSearchStr } = useContext(SearchContext);

  return (
    <AppBar>
      <Toolbar>
        <Container>
          <SearchBar onChange={setSearchStr} />
        </Container>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
