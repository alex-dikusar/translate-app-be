import React from 'react';
import Stack, { StackProps } from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

const style: StackProps = {
  direction: 'row',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 2,
};

function Loader(props: StackProps) {
  return (
    <Stack {...style} {...props}>
      <CircularProgress />
    </Stack>
  );
}

export default Loader;
