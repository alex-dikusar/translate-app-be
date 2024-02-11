import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Entry } from '../types';
import { useModal } from '../hooks';
import SearchResultExamplesModal from './SearchResultExamplesModal';

type Props = {
  items?: Entry[];
};

function SearchResultList({ items }: Props) {
  const [modalEl, showModal] = useModal(SearchResultExamplesModal);

  return (
    <List>
      {items?.map(({ id, entry, translationFull, examples }) => (
        <ListItem key={id} divider dense>
          <ListItemText primary={entry} secondary={translationFull} />
          <Button
            disabled={!examples.length}
            onClick={() => showModal({ items: examples })}
          >
            Show Examples
          </Button>
        </ListItem>
      ))}
      {modalEl}
    </List>
  );
}

export default SearchResultList;
