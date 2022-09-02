import { useSelector } from 'react-redux';

import { Title, ContactsLink } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  return (
    <>
      <li>
        <Title to="/">Phonebook</Title>
      </li>

      {isLoggedIn ? (
        <li>
          <ContactsLink to="contacts">Contacts</ContactsLink>
        </li>
      ) : null}
    </>
  );
};
