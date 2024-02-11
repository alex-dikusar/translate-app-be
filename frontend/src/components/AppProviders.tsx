import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';
import theme from 'src/theme';
import store from 'src/store';
import SearchProvider from './SearchContext';

type Props = {
  children: ReactNode;
};

function AppProviders({ children }: Props) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SearchProvider>{children}</SearchProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default AppProviders;
