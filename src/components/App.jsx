import shortid from 'shortid';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { add, deleteContact, updateFilter } from '../redux/phoneBookSlice';

import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { PhoneBook, Title, Contacts } from './App.styled';

const LOCALSTORAGE_KEY = 'contacts';

export const App = () => {
  const filter = useSelector(state => state.phoneBook.contacts.filter);
  const contacts = useSelector(state => state.phoneBook.contacts.items);
  const dispatch = useDispatch();

  useEffect(() => {
    window.localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    const findName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (findName) {
      alert(`${name} is already in contacts.`);
      return;
    } else {
      dispatch(add(contact));
    }
  };

  const filterContacts = evt => {
    dispatch(updateFilter(evt.currentTarget.value));
  };

  const addFilter = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const contactDelete = idContact => {
    dispatch(deleteContact(idContact));
  };

  return (
    <PhoneBook>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={addContact} />

      <Contacts>Contacts</Contacts>
      <Filter value={filter} onChange={filterContacts} />
      <ContactList contacts={addFilter()} onDelete={contactDelete} />
    </PhoneBook>
  );
};
