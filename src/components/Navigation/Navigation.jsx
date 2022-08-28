import { NavLink } from 'react-router-dom';
import { Title } from '../App.styled';

export const Navigation = () => {
  return (
    <div>
      <NavLink to="/">
        <Title>Phonebook</Title>
      </NavLink>
      <NavLink to="contacts">Contacts</NavLink>
    </div>
  );
};
