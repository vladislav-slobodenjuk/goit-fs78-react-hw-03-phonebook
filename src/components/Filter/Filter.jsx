import PropTypes from 'prop-types';
import { StyledFilter } from './Filter.styled';

export default function Filter({ filterValue, onFilterChange }) {
  return (
    <StyledFilter>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        type="text"
        name="filter"
        value={filterValue}
        onChange={onFilterChange}
      />
    </StyledFilter>
  );
}

Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
