import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';
import { Contacts } from '../../components/App.styled';
import { Container } from 'components/App.styled';

export const ContactsPage = () => {
  return (
    <Container>
      <Contacts>Contacts</Contacts>
      <Filter />
      <ContactList />
    </Container>
  );
};
