import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { ImUserCheck } from 'react-icons/im';

import { deleteContact } from 'redux/phoneBookSlice';

import { Item, Button } from './ContactItem.styled';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      <ImUserCheck color="385898" /> - {contact.name}: {contact.number}
      <Button type="button" onClick={() => dispatch(deleteContact(contact.id))}>
        Delete
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
