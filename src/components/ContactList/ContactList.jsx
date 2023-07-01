import PropTypes from 'prop-types';
import ListItem from './ListItem/ListItem';
import { StyledList } from './ContactList.styled';

export default function ContactList({ contacts, onDeleteClick }) {
  return (
    <StyledList>
      {contacts.map(contact => (
        <ListItem
          key={contact.id}
          contact={contact}
          onDeleteClick={onDeleteClick}
        />
      ))}
      {contacts.length === 0 && (
        <li>
          <p>Nothing found</p>
        </li>
      )}
    </StyledList>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};
