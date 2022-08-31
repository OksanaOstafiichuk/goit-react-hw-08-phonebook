import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

// import { Title } from '../App.styled';

export const Navigation = () => {
  const token = useSelector(state => state.user.token);

  return (
    <div>
      <NavLink to="/">Phonebook</NavLink>
      {token ? (
        <>
          <NavLink to="contacts">Contacts</NavLink>
        </>
      ) : null}
    </div>
  );
};
