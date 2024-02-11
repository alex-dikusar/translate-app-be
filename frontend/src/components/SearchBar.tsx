import { ChangeEvent } from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { debounce } from 'src/utils';

const SEARCH_DELAY = 1000;

type Props = Omit<TextFieldProps, 'onChange'> & {
  onChange?: (value: string) => void;
};

function DataTableSearchBar({
  placeholder = 'Search',
  value,
  onChange,
  ...rest
}: Props) {
  const handleChange = debounce(
    (event: ChangeEvent<HTMLInputElement>) =>
      onChange && onChange(event.target.value),
    SEARCH_DELAY,
  );

  return (
    <TextField
      fullWidth
      type="search"
      variant="outlined"
      defaultValue={value}
      placeholder={placeholder}
      onChange={handleChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon fontSize="small" />
          </InputAdornment>
        ),
      }}
      {...rest}
    />
  );
}

export default DataTableSearchBar;
