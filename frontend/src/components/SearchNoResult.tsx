import FolderOffOutlinedIcon from '@mui/icons-material/FolderOffOutlined';
import Stack from '@mui/material/Stack';

function SearchNoResult() {
  return (
    <Stack typography="h6" alignItems="center" mt={7}>
      <FolderOffOutlinedIcon fontSize="large" />
      No data to display
    </Stack>
  );
}

export default SearchNoResult;
