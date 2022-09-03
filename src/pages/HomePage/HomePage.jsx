import { useState } from 'react';
import { useSelector } from 'react-redux';

import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ModalW } from '../../components/ModalWindow/ModalWindow';

import { Home, Text, ButtonHome, Context } from './HomePage.styled';
import { Container } from 'components/App.styled';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Home>
      <Container>
        <Context>
          {isLoggedIn ? (
            <>
              <ButtonHome onClick={() => setShowModal(!showModal)}>
                Add contact
              </ButtonHome>

              <ButtonHome>
                <Link to="contacts">All contacts</Link>
              </ButtonHome>
            </>
          ) : (
            <Text>Welcome to the your Phone Book!</Text>
          )}
        </Context>

        {showModal && (
          <ModalW onClose={toggleModal}>
            <ContactForm onClose={toggleModal} />
          </ModalW>
        )}
      </Container>
    </Home>
  );
};
