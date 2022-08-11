import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { renderList } from 'redux/phoneBookSlice';
import { ContactItem } from 'components/ContacItem/ContactItem';

import { List } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.phoneBook.contacts.items);
  const filter = useSelector(state => state.phoneBook.contacts.filter);

  useEffect(() => {
    dispatch(renderList(filter));
  }, [dispatch, filter]);

  return (
    <List>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </List>
  );
};
