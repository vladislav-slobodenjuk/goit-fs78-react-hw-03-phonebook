import PropTypes from 'prop-types';

export default function ListItem({ contact, onDeleteClick }) {
  const { id, name, number } = contact;
  return (
    <>
      <li>
        <p>
          {name}: <span>{number}</span>
        </p>
        <button type="button" onClick={() => onDeleteClick(id)}>
          Delete
        </button>
      </li>
    </>
  );
}

ListItem.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};
