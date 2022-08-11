import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { PhoneBook, Title, Contacts } from './App.styled';

export const App = () => {
  return (
    <PhoneBook>
      <Title>Phonebook</Title>
      <ContactForm />
      <Contacts>Contacts</Contacts>
      <Filter />
      <ContactList />
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
