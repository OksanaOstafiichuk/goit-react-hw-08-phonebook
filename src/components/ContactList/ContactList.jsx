import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContacItem/ContactItem';

import { List } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(state => state.phoneBook.contacts.items);
  const filter = useSelector(state => state.phoneBook.contacts.filter);

  const renderList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <List>
      {renderList.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </List>
  );
};
