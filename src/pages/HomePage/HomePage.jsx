import { ContactForm } from '../../components/ContactForm/ContactForm';
import { useState } from 'react';
import { ModalW } from '../../components/ModalWindow/ModalWindow';

import { Home, Text, ButtonHome, Context } from './HomePage.styled';
import { Container } from 'components/App.styled';

export const HomePage = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Home>
      <Container>
        <Context>
          <Text>Best Phone Book app</Text>
          <ButtonHome onClick={() => setShowModal(!showModal)}>
            Add contact
          </ButtonHome>
          <ButtonHome>All contacts</ButtonHome>
        </Context>

        {showModal && (
          <ModalW onClose={toggleModal}>
            <ContactForm />
          </ModalW>
        )}

        {/* <ContactForm /> */}
      </Container>
    </Home>
  );
};
