import { useState } from 'react';
import shortid from 'shortid';
import { toast } from 'react-toastify';

import { FilterInput } from '../Filter/Filter.styled';
import { Button } from '../ContacItem/ContactItem.styled';
import { Form, FormInput } from './ContactForm.styled';
import { useAddContactMutation, useGetContactsQuery } from 'redux/contactsApi';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { data: contacts } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const handelSaveContact = evt => {
    const { name, value } = evt.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handelSubmit = evt => {
    evt.preventDefault();

    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    const findName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (findName) {
      toast.error(`${name} is already in contacts.`);
      return;
    } else {
      addContact(contact);
      setName('');
      setNumber('');
    }
  };

  return (
    <Form onSubmit={handelSubmit}>
      <FormInput>
        <span>Name</span>
        <FilterInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handelSaveContact}
        />
      </FormInput>
      <FormInput>
        <span>Number</span>
        <FilterInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handelSaveContact}
        />
      </FormInput>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
