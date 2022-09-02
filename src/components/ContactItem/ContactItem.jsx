import PropTypes from 'prop-types';
import { ImUserCheck } from 'react-icons/im';

import { useDeleteContactMutation } from 'redux/contactsApi';

import { Item, Button } from './ContactItem.styled';

export const ContactItem = ({ contact }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <Item>
      <ImUserCheck color="385898" /> - {contact.name}: {contact.phone}
      <Button
        type="button"
        onClick={() => deleteContact(contact.id)}
        disabled={isLoading}
      >
        Delete
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
