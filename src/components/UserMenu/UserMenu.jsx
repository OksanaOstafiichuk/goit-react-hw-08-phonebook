import { useSelector } from 'react-redux';
import { useLogoutUserMutation } from '../../redux/authApi';

export const UserMenu = () => {
  const email = useSelector(state => state.user.email);
  const [logoutUser] = useLogoutUserMutation();

  return (
    <>
      <p>Hello, {email}</p>
      <button type="button" onClick={() => logoutUser()}>
        Log out
      </button>
    </>
  );
};
