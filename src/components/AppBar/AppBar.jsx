import { useSelector } from 'react-redux';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';

import { Header } from './AppBar.styled';

export const AppBar = () => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
