import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Example } from '../types';
import ModalDialog from './ModalDialog';

type Props = {
  items: Example[];
  open: boolean;
  onClose: () => void;
};

function SearchResultExamplesModal({ items, ...rest }: Props) {
  return (
    <ModalDialog title="Examples" {...rest}>
      <List>
        {items?.map((item) => (
          <ListItem key={item.id} divider dense>
            <ListItemText>
              <span dangerouslySetInnerHTML={{ __html: item.text }} />
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </ModalDialog>
  );
}

export default SearchResultExamplesModal;
