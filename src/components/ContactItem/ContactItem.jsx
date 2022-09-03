import { useState } from 'react';
import PropTypes from 'prop-types';
import { ImUserCheck } from 'react-icons/im';

import { useDeleteContactMutation } from 'redux/contactsApi';
import { ModalW } from '../../components/ModalWindow/ModalWindow';

import { Item, Button, ButtonList } from './ContactItem.styled';
import { EditForm } from 'components/EditForm/EditForm';

export const ContactItem = ({ contact }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Item>
      <p>
        <ImUserCheck color="385898" /> - {contact.name}: {contact.number}
      </p>
      <ButtonList>
        <Button
          type="button"
          onClick={() => setShowModal(!showModal)}
          disabled={isLoading}
        >
          Edit
        </Button>
        <Button
          type="button"
          onClick={() => deleteContact(contact.id)}
          disabled={isLoading}
        >
          Delete
        </Button>
      </ButtonList>
      {showModal && (
        <ModalW onClose={toggleModal}>
          <EditForm onClose={toggleModal} contact={contact} />
        </ModalW>
      )}
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
