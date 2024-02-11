import { baseTheme } from '../baseTheme';

const { spacing, typography } = baseTheme;

export default {
  MuiDialog: {
    defaultProps: {
      maxWidth: 'sm',
      fullWidth: true,
    },
    styleOverrides: {
      paper: {
        minHeight: spacing(20),
      },
    },
  },
  MuiDialogActions: {
    styleOverrides: {
      root: {
        gap: spacing(1),
        padding: spacing(2),
        '>.MuiButton-root': {
          minWidth: spacing(10),
        },
      },
    },
  },
  MuiDialogContent: {
    styleOverrides: {
      root: {
        display: 'flex',
        flexDirection: 'column',
        gap: spacing(2),
        padding: spacing(0, 2),
        overflowY: 'visible',
      },
    },
  },
  MuiDialogTitle: {
    styleOverrides: {
      root: {
        ...typography.h2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: spacing(2),
        padding: spacing(1.5, 2),
      },
    },
  },
};
