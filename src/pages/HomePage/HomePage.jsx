// import { ContactForm } from '../../components/ContactForm/ContactForm';

import { Home, Text, ButtonHome, Context } from './HomePage.styled';
import { Container } from 'components/App.styled';

export const HomePage = () => {
  return (
    <Home>
      <Container>
        <Context>
          <Text>Best Phone Book app</Text>
          <ButtonHome>Add contact</ButtonHome>
          <ButtonHome>All contacts</ButtonHome>
        </Context>
        {/* <ContactForm /> */}
      </Container>
    </Home>
  );
};
