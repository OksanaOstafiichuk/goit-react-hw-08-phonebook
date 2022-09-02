import { useSelector } from 'react-redux';
import { useLogoutUserMutation } from '../../redux/authApi';

import { UserItem, User, Logout } from './UserMenu.styled';

export const UserMenu = () => {
  const email = useSelector(state => state.user.email);
  const [logoutUser] = useLogoutUserMutation();

  return (
    <UserItem>
      <User>Hello, {email}</User>
      <Logout type="button" onClick={() => logoutUser()}>
        Log out
      </Logout>
    </UserItem>
  );
};
