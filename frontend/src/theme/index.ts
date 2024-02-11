import { createTheme } from '@mui/material/styles';
import { baseTheme } from './baseTheme';
import { components } from './components';

export default createTheme({
  ...baseTheme,
  components,
});
