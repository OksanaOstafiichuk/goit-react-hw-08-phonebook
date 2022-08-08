import shortid from 'shortid';
import { ToastContainer, toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';

import { add, deleteContact, updateFilter } from '../redux/phoneBookSlice';

import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { PhoneBook, Title, Contacts } from './App.styled';

export const App = () => {
  const filter = useSelector(state => state.phoneBook.contacts.filter);
  const contacts = useSelector(state => state.phoneBook.contacts.items);
  const dispatch = useDispatch();

  const addContact = (name, number) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    const findName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    console.log(findName);
    if (findName) {
      toast.error(`${name} is already in contacts.`);
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
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </PhoneBook>
  );
};
