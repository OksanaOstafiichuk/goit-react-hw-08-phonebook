import { useDispatch, useSelector } from 'react-redux';

import { updateFilter } from '../../redux/phoneBookSlice';

import { FilterInput } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(state => state.phoneBook.contacts.filter);
  const dispatch = useDispatch();

  const filterContacts = evt => {
    dispatch(updateFilter(evt.currentTarget.value));
  };

  return (
    <label>
      <span>Find contacts by name</span>
      <FilterInput type="text" value={filter} onChange={filterContacts} />
    </label>
  );
};
