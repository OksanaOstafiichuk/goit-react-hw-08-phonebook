import { useState } from 'react';
import { toast } from 'react-toastify';

import { FilterInput } from '../Filter/Filter.styled';
import { Button } from '../ContactItem/ContactItem.styled';
import { Form, FormInput } from '../ContactForm/ContactForm.styled';
import { useEditContactMutation } from 'redux/contactsApi';

export const EditForm = ({ onClose, contact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [editContact] = useEditContactMutation();

  const handelSaveContact = evt => {
    const { name, value } = evt.currentTarget;
    console.log(name, value);

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

    const updateContact = {
      name,
      number,
    };
    console.log(contact.id);
    console.log(contact.name);
    console.log(contact.number);

    editContact({ id: contact.id, payload: updateContact });
    setName('');
    setNumber('');
    onClose();

    toast.success('Contact changed successfully!');
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
      <Button type="submit">Save change</Button>
    </Form>
  );
};
