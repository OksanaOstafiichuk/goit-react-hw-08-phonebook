import { useState } from 'react';
import { useSelector } from 'react-redux';

import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ModalW } from '../../components/ModalWindow/ModalWindow';

import { Home, Text, ButtonHome, Context } from './HomePage.styled';
import { Container } from 'components/App.styled';

export const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handelAddContact = () => {
    setShowModal(!showModal);
  };

  return (
    <Home>
      <Container>
        <Context>
          <Text>Best Phone Book app</Text>
          {isLoggedIn && (
            <>
              <ButtonHome onClick={() => handelAddContact()}>
                Add contact
              </ButtonHome>

              <ButtonHome>All contacts</ButtonHome>
            </>
          )}
        </Context>

        {showModal && (
          <ModalW onClose={toggleModal}>
            <ContactForm />
          </ModalW>
        )}
      </Container>
    </Home>
  );
};
