import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import shortid from 'shortid';
import { toast } from 'react-toastify';

import { add } from 'redux/phoneBookSlice';

import { FilterInput } from '../Filter/Filter.styled';
import { Button } from '../ContacItem/ContactItem.styled';
import { Form, FormInput } from './ContactForm.styled';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.phoneBook.contacts.items);

  const hendelSaveContact = evt => {
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

  const hendelSubmit = evt => {
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
      dispatch(add(contact));
      setName('');
      setNumber('');
    }
  };

  return (
    <Form onSubmit={hendelSubmit}>
      <FormInput>
        <span>Name</span>
        <FilterInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={hendelSaveContact}
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
          onChange={hendelSaveContact}
        />
      </FormInput>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
