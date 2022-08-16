import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContacItem/ContactItem';

import { useGetContactsQuery } from 'redux/contactsApi';

import { List } from './ContactList.styled';

export const ContactList = () => {
  const filter = useSelector(state => state.phoneBook.contacts.filter);
  const { data: contacts, error, isLoading } = useGetContactsQuery();

  const renderList = () => {
    if (!contacts) {
      return;
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  return (
    <>
      {error && <p>Contacts not found</p>}
      {isLoading ? (
        <p>loading..</p>
      ) : (
        <List>
          {renderList().map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
        </List>
      )}
    </>
  );
};
