import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem/ContactItem';

import { useGetContactsQuery } from 'redux/contactsApi';

import { List } from './ContactList.styled';
import { useMemo } from 'react';

export const ContactList = () => {
  const filter = useSelector(state => state.phoneBook.filter);
  const { data: contacts, error, isLoading } = useGetContactsQuery();

  const renderList = useMemo(() => {
    return (
      contacts?.filter(contact =>
        contact.name.toLowerCase().includes(filter)
      ) ?? []
    );
  }, [contacts, filter]);

  return (
    <>
      {error && <p>Contacts not found</p>}
      {isLoading ? (
        <p>loading..</p>
      ) : (
        <List>
          {renderList.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
        </List>
      )}
    </>
  );
};
