import { Components } from '@mui/material/styles';
import MuiButton from './button';
import MuiCssBaseline from './global';
import MuiCircularProgress from './loader';
import MuiContainer from './container';
import MuiGrid from './grid';
import MuiDialog from './dialog';
import MuiInput from './input';
import MuiHeader from './header';

export const components = {
  MuiButton,
  MuiCssBaseline,
  MuiCircularProgress,
  MuiContainer,
  MuiGrid,
  ...MuiDialog,
  ...MuiInput,
  ...MuiHeader,
} as Partial<Components>;
